import { BreadCr, Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { News } from "@/types";
import { formatDate, instance } from "@/utils";
import { GetServerSidePropsContext } from "next";
import parse from "html-react-parser";
import React from "react";
import { useTranslation } from "react-i18next";
import { NewsItem } from "@/components/news";

interface NewsDetailProps {
  news: News;
  relatedNews: News[];
}

const NewsDetail = ({ news, relatedNews }: NewsDetailProps) => {
  const { t } = useTranslation();

  const breadCrumbsItems = [
    {
      name: t("news.title"),
      link: "/news",
    },
    {
      name: news.category.name,
      link: `/news?c=${news.category.id}`,
    },
  ];

  return (
    <MainLayout>
      <div className="container m-auto px-4 mt-28">
        <BreadCr items={breadCrumbsItems} />
        <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
          {news.title}
        </h1>
        <p className="text-sm mb-2">{formatDate(news.createdAt, " - ")}</p>
        <img
          src={news.featuredImage}
          alt={news.title}
          className="w-full object-cover object-center aspect-21/9 mb-8"
        />
        <div className="pb-20 mb-20 border-b border-tertiary/20">
          {parse(news.content)}
        </div>
        <h2 className="text-xl md:text-3xl uppercase mb-10">
          <Trans text="news.detail.related" />
        </h2>
        <div className="grid grid-cols-12 gap-8 mb-10">
          {relatedNews.length > 0 &&
            relatedNews.map((item) => (
              <NewsItem
                key={item.id}
                news={item}
                className="col-span-12 sm:col-span-6 lg:col-span-4"
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (!context.params || typeof context.params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const { id } = context.params;
  const { data: news }: { data: News } = await instance.get(`/news/${id}`);
  const { data }: { data: News[] } = await instance.get(
    `/news?c=${news.category.id}&perPage=4`
  );

  const relatedNews = data.filter((item) => item.id !== news.id).slice(0, 3);

  return {
    props: {
      news,
      relatedNews,
    },
  };
};

export default NewsDetail;
