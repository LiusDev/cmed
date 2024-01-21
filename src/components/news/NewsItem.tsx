import { News } from "@/types";
import { formatDate } from "@/utils";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NewsItemProps {
  news: News;
  className?: string;
}

const NewsItem = ({ news, className = "" }: NewsItemProps) => {
  return (
    <article className={twMerge(`${className}`)}>
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
        {news.category.name}
      </p>
      <Link href={`/news/${news.id}`}>
        <h4 className="uppercase font-bold mb-4 text-xl line-clamp-2">
          {news.title}
        </h4>
      </Link>
      <p className="text-sm text-tertiary-light">
        {formatDate(news.createdAt, " - ")}
      </p>
    </article>
  );
};

export default NewsItem;
