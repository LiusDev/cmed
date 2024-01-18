import { Project } from "@/types"
import { Trans } from "../common"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { instance } from "@/utils"
import ProjectCard from "./ProjectCard"

interface OtherProjectProps {
    projects: Project[]
    pageSize: number
}

const OtherProject = ({ projects, pageSize }: OtherProjectProps) => {
    const router = useRouter()
    const { keyword, page } = router.query

    const [data, setData] = useState<Project[]>(projects)

    const handleGetItems = async () => {
        const { data: fetchProjects } = await instance.get(
            `/projects?perPage=${pageSize}&page=${page || 1}${
                keyword ? `&keyword=${keyword}` : ""
            }`
        )
        setData(fetchProjects)
    }

    useEffect(() => {
        handleGetItems()
    }, [page, keyword])

    if (!data || data.length === 0) return <></>

    return (
        <section className="container m-auto px-4 my-16">
            <h3 className="mb-10 text-2xl">
                <Trans text="project.other" />
            </h3>
            <div className="grid grid-cols-6 gap-8">
                {data.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default OtherProject
