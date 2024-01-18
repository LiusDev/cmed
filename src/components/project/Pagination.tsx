import { useRouter } from "next/router"
import { Pagination as MantinePage } from "@mantine/core"
import { doGet } from "@/utils"
import { useEffect, useState } from "react"

interface PaginationProps {
    pageSize: number
}

const Pagination = ({ pageSize }: PaginationProps) => {
    const router = useRouter()
    const { keyword, page } = router.query

    const { data } = doGet(
        `/projects/count?${keyword && `keyword=${keyword}&`}`
    )

    const [totalProjects, setTotalProjects] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        !data ? setTotalProjects(0) : setTotalProjects(data)
        !Number(page) ? setCurrentPage(1) : setCurrentPage(Number(page))
    }, [data, page, keyword])

    const handlePageChange = (page: number) => {
        router.push(`/projects?${keyword && `keyword=${keyword}&`}page=${page}`)
    }

    const getTotalPages = (items: number) => {
        return Math.ceil(items / pageSize)
    }
    return (
        <div className="flex w-full items-center justify-center mb-16">
            <MantinePage
                value={currentPage}
                total={getTotalPages(totalProjects)}
                onChange={(page) => handlePageChange(page)}
                color="blue"
                radius="xl"
            />
        </div>
    )
}

export default Pagination
