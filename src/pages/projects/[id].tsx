import { MainLayout } from "@/components/layout"
import {
    ProjectCard,
    ProjectDetailBanner,
    ProjectDetailCarousel,
} from "@/components/project"
import { Project } from "@/types"
import { instance } from "@/utils"
import parse from "html-react-parser"
import { Trans } from "@/components/common"
import { GetServerSidePropsContext } from "next"
import useLang from "@/hooks/useLang"

type ProjectDetailProps = {
    project: Project
    otherProjects: Project[]
}

const ProjectDetail = ({ project, otherProjects }: ProjectDetailProps) => {
    const { currentLanguage } = useLang()
    return (
        <MainLayout>
            <ProjectDetailBanner lang={currentLanguage} project={project} />

            <div className="container m-auto mt-28 px-4">
                <div className="mb-20 border-b border-tertiary/20">
                    <div className="flex flex-col items-start pb-20 md:flex-row">
                        <div className="mb-10 w-full px-5 md:mb-0 md:w-1/2 h-[400px]">
                            <img
                                src={project.featuredImage}
                                alt="project-image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-full px-5 md:w-1/2 ">
                            <h1 className="mb-4 text-xl font-bold capitalize border-b-2 py-2 pr-2 border-primary inline-block">
                                <span className="text-primary">1.</span>{" "}
                                <Trans text="project.detail.title" />
                            </h1>
                            <div>
                                {parse(
                                    project[
                                        `content${currentLanguage}` as keyof typeof project
                                    ] as string
                                )}
                            </div>
                        </div>
                    </div>

                    <h2 className="mb-4 text-center text-xl font-bold capitalize">
                        <span className="text-primary">2.</span>{" "}
                        <Trans text="project.detail.images" />
                    </h2>
                    <ProjectDetailCarousel project={project} />
                </div>

                <h2 className="mb-4 text-xl font-bold capitalize">
                    <span className="text-primary">3.</span>{" "}
                    <Trans text="project.detail.other" />
                </h2>
                <div className="mb-10 grid lg:grid-cols-4 gap-8">
                    {otherProjects.length > 0 &&
                        otherProjects.map((item, index) => (
                            <ProjectCard
                                lang={currentLanguage}
                                key={item.id}
                                index={index}
                                project={item}
                            />
                        ))}
                </div>
            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({
    res,
    params,
}: GetServerSidePropsContext) {
    res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59"
    )

    if (!params) throw new Error("No params")

    const id = params.id
    const [{ data: project }, { data: p2 }] = await Promise.all([
        instance.get<Project>(`/projects/${id}`),
        instance.get<Project[]>(`/projects?perPage=5`),
    ])
    const otherProjects = p2
        .filter((item) => item.id !== project.id)
        .slice(0, 4)

    return { props: { project, otherProjects } }
}

export default ProjectDetail
