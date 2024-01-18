import { MainLayout } from "@/components/layout"
import { CategoriesNav, NewsList, Pagination, Title } from "@/components/news"
import type { Category, News } from "@/types"
import { instance } from "@/utils"
import { InferGetStaticPropsType } from "next"

const PAGE_SIZE = 8

interface NewsProps {
    news: InferGetStaticPropsType<typeof getStaticProps>["news"]
    categories: InferGetStaticPropsType<typeof getStaticProps>["categories"]
}

const News = ({ news, categories }: NewsProps) => {
    return (
        <MainLayout>
            <div className="container m-auto px-4 mt-28">
                <Title />
                <CategoriesNav categories={categories} />
                <NewsList pageSize={PAGE_SIZE} news={news} />
                <Pagination pageSize={PAGE_SIZE} />
            </div>
        </MainLayout>
    )
}

export const getStaticProps = async () => {
    const news: News[] = (await instance.get("/news?perPage=8")).data || []
    const categories: Category[] =
        (await instance.get("/categories")).data || []

    return {
        props: {
            news,
            categories,
        },
        revalidate: 30,
    }
}

export default News
