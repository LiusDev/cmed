import { BreadCr, Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { News } from "@/types";
import { formatDate, instance } from "@/utils";
import parse from "html-react-parser";
import React, { use, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NewsItem } from "@/components/news";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NewsDetail = () => {
  const { t } = useTranslation();
  const [relatedNews, setRelatedNews] = useState<News[]>([]);
  const [news, setNews] = useState<News>();
  const router = useRouter();
  const breadCrumbsItems = useMemo(() => news
    ? [
      {
        name: t("news.title"),
        link: "/news",
      },
      {
        name: news.category.name,
        link: `/news?c=${news.category.id}`,
      },
    ]
    : [], [news]);

  const fetchData = useCallback(async () => {
    try {
      const id = router.query.id;
      const { data: news }: { data: News } = await instance.get(`/news/${id}`);
      setNews(news);
      const { data }: { data: News[] } = await instance.get(
        `/news?c=${news.category.id}&perPage=4`
      );

      const relatedNews = data
        .filter((item) => item.id !== news.id)
        .slice(0, 3);
      setRelatedNews(relatedNews);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [router.asPath]);

  useEffect(() => {
    fetchData();
  }, [router.asPath]);

  if (!news) {
    return <div>Loading...</div>;
  }
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

export default NewsDetail;
