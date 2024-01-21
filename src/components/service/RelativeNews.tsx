import { NewsItem } from ".";
import { Trans } from "../common";
import type { News } from "@/types";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { instance } from "@/utils";

interface NewsProps {
  news: News[];
  className?: string;
}

const RelativeNews = ({ news }: NewsProps) => {
  const router = useRouter();
  const { c, page } = router.query;

  const [data, setData] = useState<News[]>(news);

  const handleGetNews = async () => {
    const { data: fetchNews } = await instance.get(
      `/news?perPage=3&page=${page || 1}${c ? `&category=${c}` : ""}`
    );

    setData(fetchNews);
  };

  useEffect(() => {
    handleGetNews();
  }, [c, page]);

  return (
    <div className="py-20">
      {data.length === 0 ? (
        <div className="col-span-12">
          <Trans text="common.noData" />
        </div>
      ) : (
        <>
          <h1 className="font-bold text-primary text-3xl text-center py-20">
            <Trans text="services.detail.title" />
          </h1>
          <div className="flex flex-col px-5 lg:px-40 lg:space-x-5">
            {data.map((newsItem, index) => (
              <NewsItem key={newsItem.id} news={newsItem} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RelativeNews;
