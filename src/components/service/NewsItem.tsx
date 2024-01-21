import React from 'react'
import type { News } from "@/types"
import Link from 'next/link'
import { formatDate } from "@/utils"

interface NewsItemProps {
    news: News
    className?: string
}

const NewsItem = ({ news, className = "" } : NewsItemProps) => {
  return (
    <article className='flex flex-col space-y-3'>
        <div className="h-72 w-[450px] overflow-hidden mb-4">
            <Link href={`/news/${news.id}`}>
                <img
                    src={news.featuredImage}
                    alt={news.title}
                    className="object-cover w-full object-center h-full transition-all hover:scale-105"
                />
            </Link>
        </div>
        <div className='text-base font-bold uppercase text-primary'>{news.category.name}</div>
        <h1 className='uppercase text-lg font-bold'>{news.title}</h1>
        <div>{formatDate(news.createdAt, " - ")}</div>
    </article>
  )
}

export default NewsItem