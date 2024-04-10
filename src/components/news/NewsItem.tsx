import { News, type Category } from "@/types";
import { formatDate } from "@/utils";
import Link from "next/link";
import type { FC } from "react";
import { twMerge } from "tailwind-merge";

interface NewsItemProps {
  news: News;
  className?: string;
  lang: string
}

const NewsItem: FC<NewsItemProps> = ({ news, className = "", lang }) => {
  return (
    <article className={twMerge(`group ${className}`)}>
      <div className="h-60 overflow-hidden mb-4">
        <Link href={`/news/${news.id}`}>
          <img
            src={news.featuredImage}
            alt={news.title}
            className="object-cover w-full object-center h-full transition-all hover:scale-105"
          />
        </Link>
      </div>
      <p className="text-primary uppercase font-medium mb-2">
        {news.category[`name${lang}` as keyof Category]}
      </p>
      <Link href={`/news/${news.id}`}>
        <h4 className="uppercase font-bold mb-4 text-xl line-clamp-2 group-hover:text-primary">
          {news[`title${lang}` as keyof News] as string}
        </h4>
      </Link>
    </article>
  );
};

export default NewsItem;
