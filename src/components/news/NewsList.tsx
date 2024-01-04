import { News } from "@/types"
import { formatDate, instance } from "@/utils"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Trans } from "../common"
import { NewsItem } from "."

interface NewsProps {
    news: News[]
    pageSize: number
    className?: string
}

const NewsList = ({ news, pageSize, className = "" }: NewsProps) => {
    const router = useRouter()
    const { c, page } = router.query

    const [data, setData] = useState<News[]>(news)

    const handleGetNews = async () => {
        const { data: fetchNews } = await instance.get(
            `/news?perPage=${pageSize}&page=${page || 1}${
                c ? `&category=${c}` : ""
            }`
        )

        setData(fetchNews)
    }

    useEffect(() => {
        handleGetNews()
    }, [c, page])

    return (
        <div className={twMerge(`grid grid-cols-12 gap-8 my-16 ${className}`)}>
            {data.length === 0 ? (
                <div className="col-span-12">
                    <Trans text="common.noData" />
                </div>
            ) : (
                <>
                    <article className="hidden sm:block relative col-span-12 lg:col-span-8 overflow-hidden">
                        <Link href={`/news/${data[0].id}`}>
                            <img
                                src={data[0].featuredImage}
                                alt={data[0].title}
                                className="object-cover w-full object-center h-96 transition-all hover:scale-105"
                            />
                        </Link>
                        <div className="absolute bottom-0 left-0 p-6 bg-secondary-dark/70 w-1/2">
                            <p className="text-primary uppercase font-medium mb-2">
                                {data[0].category.name}
                            </p>
                            <Link href={`/news/${data[0].id}`}>
                                <h4 className="uppercase font-bold mb-4 text-xl line-clamp-2">
                                    {data[0].title}
                                </h4>
                            </Link>

                            <p className="text-sm text-tertiary-light">
                                {formatDate(data[0].createdAt, " - ")}
                            </p>
                        </div>
                    </article>
                    {data.map((newsItem, index) => (
                        <NewsItem
                            key={newsItem.id}
                            news={newsItem}
                            className={` col-span-12 sm:col-span-6 lg:col-span-4 ${
                                index === 0 && "sm:hidden"
                            }`}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default NewsList
