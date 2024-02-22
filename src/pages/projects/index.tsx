import { Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import {
    Banner,
    FeaturedProject,
    OtherProject,
    Pagination,
} from "@/components/project"
import { Project } from "@/types"
import { instance } from "@/utils"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const PAGE_SIZE = 9

const ProjectPage = () => {
    const [data, setData] = useState<Project[]>([])
    const router = useRouter()
    const fetchData = async () => {
        try {
            const response = await instance.get(router.asPath)
            const projects: Project[] = response.data || []
            setData(projects)
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
            <h1 className="text-center px-4 py-20 text-4xl">
                <Trans text="project.title" />
            </h1>
            <FeaturedProject projects={data} />
            <OtherProject projects={data} pageSize={PAGE_SIZE} />
            <Pagination pageSize={PAGE_SIZE} />
        </MainLayout>
    )
}

export default ProjectPage
