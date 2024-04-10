import { News, type Category } from "@/types"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { Trans } from "../common"
import { NewsItem } from "."
import useLang from "@/hooks/useLang"
import { useMemo, type FC } from "react"

interface NewsProps {
    news: News[]
    className?: string
}

const NewsList: FC<NewsProps> = ({ news, className = "" }) => {
    const { currentLanguage } = useLang()
    const items = useMemo(() => news.map((newsItem, index) => (
        <NewsItem
            lang={currentLanguage}
            key={newsItem.id}
            news={newsItem}
            className={` col-span-12 sm:col-span-6 lg:col-span-4 ${index === 0 && "sm:hidden"}`}
        />
    )), [news, currentLanguage])


    return (
        <div className={twMerge(`grid grid-cols-12 gap-8 my-16 ${className}`)}>
            {news.length === 0 ? (
                <div className="col-span-12">
                    <Trans text="common.noData" />
                </div>
            ) : (
                <>
                    <article className="group hidden sm:block relative col-span-12 lg:col-span-8 overflow-hidden">
                        <Link href={`/news/${news[0].id}`}>
                            <img
                                src={news[0].featuredImage}
                                alt={news[0][`title${currentLanguage}` as keyof News] as string}
                                className="object-cover w-full object-center h-96 transition-all hover:scale-105"
                            />
                        </Link>
                        <div className=" absolute bottom-0 left-0 p-6 bg-secondary-dark/70 w-1/2">
                            <p className="text-primary uppercase font-medium mb-2">
                                {news[0].category[`name${currentLanguage}` as keyof Category] as string}
                            </p>
                            <Link href={`/news/${news[0].id}`}>
                                <h4 className="uppercase font-bold mb-4 text-xl line-clamp-2 group-hover:text-primary">
                                    {news[0][`title${currentLanguage}` as keyof News] as string}
                                </h4>
                            </Link>
                        </div>
                    </article>
                    {items}
                </>
            )}
        </div>
    )
}

export default NewsList
