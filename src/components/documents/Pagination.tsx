import { useRouter } from "next/router"
import { Pagination as MantinePage } from "@mantine/core"
import { doGet } from "@/utils"
import { useEffect, useState } from "react"

interface PaginationProps {
    pageSize: number
}

const Pagination = ({ pageSize }: PaginationProps) => {
    const router = useRouter()
    const { page, c } = router.query

    const { data } = doGet(`/news/count${c ? `?category=${c}` : ""} `)

    const [totalNews, setTotalNews] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        !data ? setTotalNews(0) : setTotalNews(data)
        !Number(page) ? setCurrentPage(1) : setCurrentPage(Number(page))
    }, [data, page])

    const handlePageChange = (page: number) => {
        router.push(`/news?${c ? `c=${c}&` : ""}page=${page}`)
    }

    const getTotalPages = (items: number) => {
        return Math.ceil(items / pageSize)
    }
    return (
        <div className="flex w-full items-center justify-center my-16">
            <MantinePage
                value={currentPage}
                total={getTotalPages(totalNews)}
                onChange={(page) => handlePageChange(page)}
                color="blue"
                radius="xl"
            />
        </div>
    )
}

export default Pagination
