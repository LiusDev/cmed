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
import { useState } from "react"

const PAGE_SIZE = 9

interface ProjectPageProps {
    projects: InferGetStaticPropsType<typeof getStaticProps>["projects"]
}

const ProjectPage = ({ projects }: ProjectPageProps) => {
    const [data, setData] = useState<Project[]>(projects)

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
