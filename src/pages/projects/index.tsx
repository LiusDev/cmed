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
import { InferGetStaticPropsType } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const PAGE_SIZE = 9

interface ProjectPageProps {
    projects: InferGetStaticPropsType<typeof getStaticProps>["projects"]
}

const ProjectPage = ({ projects }: ProjectPageProps) => {
    const [data, setData] = useState<Project[]>(projects)
    const router = useRouter()
    const fetchData = async () => {
        try {
            const response = await instance.get(router.asPath)
            const projects: Project[] = response.data || []
            setData(projects)
            console.log(projects)

            // !projects.length && alert("No projects found");
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

export const getStaticProps = async () => {
    const projects: Project[] =
        (await instance.get(`/projects?perPage=${PAGE_SIZE}`)).data || []

    return {
        props: {
            projects,
        },
        revalidate: 30,
    }
}

export default ProjectPage
