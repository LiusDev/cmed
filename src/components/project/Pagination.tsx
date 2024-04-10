import { useRouter } from "next/router"
import { Pagination as MantinePage } from "@mantine/core"
import { doGet } from "@/utils"
import { memo, useCallback, useEffect, useMemo, useState } from "react"

interface PaginationProps {
    pageSize: number
}

const Pagination = memo<PaginationProps>(({ pageSize }) => {
    const router = useRouter()
    const { name, page } = router.query
    const [totalProjects, setTotalProjects] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        doGet(`/projects/count?${name && `name=${name}&`}`).then(res => {
            const data = res.data
            !data ? setTotalProjects(0) : setTotalProjects(data)
            !Number(page) ? setCurrentPage(1) : setCurrentPage(Number(page))
        })
    }, [page, name])

    const handlePageChange = useCallback((page: number) => {
        router.push(`/projects?${name && `name=${name}&`}page=${page}`)
    }, [name, router])
    
    const totalPages = useMemo(() => Math.ceil(totalProjects / pageSize), [totalProjects, pageSize])

    return (
        <div className="flex w-full items-center justify-center mb-16">
            <MantinePage
                value={currentPage}
                total={totalPages}
                onChange={handlePageChange}
                color="blue"
                radius="xl"
            />
        </div>
    )
})

export default Pagination
