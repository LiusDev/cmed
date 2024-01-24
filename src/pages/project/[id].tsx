import { MainLayout } from "@/components/layout"
import {
    ProjectCard,
    ProjectDetailBanner,
    ProjectDetailCarousel,
} from "@/components/project"
import { Project } from "@/types"
import { instance } from "@/utils"
import { GetServerSidePropsContext } from "next"
import parse from "html-react-parser"
import { Trans } from "@/components/common"

interface ProjectDetailProps {
    project: Project
    otherProjects: Project[]
}

const ProjectDetail = ({ project, otherProjects }: ProjectDetailProps) => {
    return (
        <MainLayout>
            <ProjectDetailBanner project={project} />

            <div className="container m-auto px-4 mt-28">
                <div className="border-b border-tertiary/20 mb-20">
                    <div className="pb-20 flex items-center">
                        <div className="w-1/2 px-5">
                            <img
                                src={project.featuredImage}
                                alt="project-image"
                            />
                        </div>
                        <div className="w-1/2 px-5">
                            <h1 className="text-xl font-bold capitalize mb-4">
                                <span className="text-primary">1.</span>{" "}
                                <Trans text="project.detail.title" />
                            </h1>
                            <div>{parse(project.content)}</div>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold capitalize mb-4 text-center">
                        <span className="text-primary">2.</span>{" "}
                        <Trans text="project.detail.images" />
                    </h2>
                    <ProjectDetailCarousel />
                </div>

                <h2 className="text-xl font-bold capitalize mb-4">
                    <span className="text-primary">3.</span>{" "}
                    <Trans text="project.detail.other" />
                </h2>
                <div className="grid grid-cols-12 gap-8 mb-10">
                    {otherProjects.length > 0 &&
                        otherProjects.map((item) => (
                            <ProjectCard
                                key={item.id}
                                project={item}
                                className="col-span-12 sm:col-span-6 lg:col-span-4"
                            />
                        ))}
                </div>
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    if (!context.params || typeof context.params.id !== "string") {
        return {
            notFound: true,
        }
    }
    const { id } = context.params
    const { data: project }: { data: Project } = await instance.get(
        `/projects/${id}`
    )
    const { data }: { data: Project[] } = await instance.get(
        `/projects?perPage=4`
    )

    const otherProjects = data
        .filter((item) => item.id !== project.id)
        .slice(0, 3)

    return {
        props: {
            project,
            otherProjects,
        },
    }
}
export default ProjectDetail
