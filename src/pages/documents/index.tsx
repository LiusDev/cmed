import {
    Banner,
    CategoriesNav,
    DocumentsList,
    Pagination,
} from "@/components/documents"
import { MainLayout } from "@/components/layout"
import type { Category, Document } from "@/types"
import { instance } from "@/utils"
import { InferGetServerSidePropsType } from "next"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
interface DocumentsProps {
    categories: InferGetServerSidePropsType<
        typeof getServerSideProps
    >["categories"]
    documents: InferGetServerSidePropsType<
        typeof getServerSideProps
    >["documents"]
}

const DocumentPage = ({ categories, documents }: DocumentsProps) => {
    const [data, setData] = useState<Document[]>(documents)
    const router = useRouter()
    const fetchData = async () => {
        try {
            const response = await instance.get(router.asPath)
            const documents: Document[] = response.data || []
            setData(documents)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [router.asPath])

    return (
        <MainLayout>
            <Banner />
            <div className="px-10 lg:px-40 pt-28">
                <CategoriesNav categories={categories} />
                <DocumentsList documents={data} />
                <Pagination pageSize={10} />
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const categories: Category[] =
        (await instance.get("/categories")).data || []
    const documents: Document[] =
        (await instance.get("/documents?perPage=12")).data || []
    return {
        props: {
            categories,
            documents,
        },
    }
}

export default DocumentPage
