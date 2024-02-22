import { MainLayout } from "@/components/layout"
import { CategoriesNav, NewsList, Pagination, Title } from "@/components/news"
import type { Category, News } from "@/types"
import { instance } from "@/utils"
import { InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const PAGE_SIZE = 8

interface NewsProps {
    categories: InferGetServerSidePropsType<
        typeof getServerSideProps
    >["categories"]
}

const News = ({ categories }: NewsProps) => {
    const router = useRouter()
    const { c, page } = router.query

    const [news, setNews] = useState<News[]>([])

    const handleGetNews = async () => {
        const { data: fetchNews } = await instance.get(
            `/news?perPage=${PAGE_SIZE}&page=${page || 1}${
                c ? `&category=${c}` : ""
            }`
        )

        setNews(fetchNews)
    }

    useEffect(() => {
        handleGetNews()
    }, [c, page])
    return (
        <MainLayout>
            <div className="container m-auto px-4 mt-28">
                <Title />
                <CategoriesNav categories={categories} />
                <NewsList news={news} />
                <Pagination pageSize={PAGE_SIZE} />
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const categories: Category[] =
        (await instance.get("/categories")).data || []

    return {
        props: {
            categories,
        },
    }
}

export default News
