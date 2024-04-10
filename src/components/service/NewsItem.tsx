import React from "react";
import type { News } from "@/types";
import Link from "next/link";

interface NewsItemProps {
  news: News;
  className?: string;
  lang: string;
}

const NewsItem = ({ news, lang, className = "" }: NewsItemProps) => {
  return (
    <article className="flex flex-col space-y-3">
      <div className="h-72 md:w-[450px] overflow-hidden mb-4">
        <Link href={`/news/${news.id}`}>
          <img
            src={news.featuredImage}
            alt={news[`title${lang}` as keyof typeof news] as string}
            className="object-cover w-full object-center h-full transition-all hover:scale-105"
          />
        </Link>
      </div>
      <div className="text-base font-bold uppercase text-primary">
        {news.category[`name${lang}` as keyof typeof news.category] as string}
      </div>
      <h1 className="uppercase text-lg font-bold">{news[`title${lang}` as keyof typeof news] as string}</h1>
    </article>
  );
};

export default NewsItem;
