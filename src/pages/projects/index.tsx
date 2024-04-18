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
import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import React from "react"

const PAGE_SIZE = 9

const ProjectPage = () => {
    const projects: Project[] = []
    const [data, setData] = useState<Project[]>(projects)
    const router = useRouter()
    const fetchData = useCallback(async () => {
        try {
            const response = await instance.get(
                `/projects?perPage=${PAGE_SIZE}`
            )
            const projects: Project[] = response.data || []
            setData(projects)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }, [])
    useEffect(() => {
        fetchData()
    }, [router.asPath])

    return (
        <MainLayout title="Dự án">
            <Banner />
            <h1 className="text-center px-4 py-20 text-4xl">
                <Trans text="project.title" />
            </h1>
            {!data ? (
                <div>Loading...</div>
            ) : (
                <>
                    <FeaturedProject projects={data} />
                    <OtherProject projects={data} pageSize={PAGE_SIZE} />
                    <Pagination pageSize={PAGE_SIZE} />
                </>
            )}
        </MainLayout>
    )
}

export default ProjectPage
