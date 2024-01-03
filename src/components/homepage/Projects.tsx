import { Project } from "@/types"
import { Button, Trans } from "../common"
import { useState } from "react"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { twMerge } from "tailwind-merge"

const defaultProject: Project = {
    id: 0,
    createdAt: "abc",
    modifiedAt: "abc",
    name: "Tên dự án",
    featuredImage: "/home/default-project.png",
    description:
        "The Graphic Designer job description includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. You’ll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more.",
    content:
        "The Graphic Designer job description includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. You’ll be the one to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more.",
}

interface ProjectProps {
    projects: Project[]
    className?: string
}

const Projects = ({ projects, className = "" }: ProjectProps) => {
    const [currentProject, setCurrentProject] = useState<Project>(
        projects[0] || defaultProject
    )

    const handleChangeProject = (direction: "next" | "prev") => {
        if (projects.length === 0) {
            setCurrentProject(defaultProject)
            return
        }
        const currentIndex = projects.findIndex(
            (project) => project.id === currentProject.id
        )
        if (direction === "next") {
            if (currentIndex === projects.length - 1) {
                setCurrentProject(projects[0])
            } else {
                setCurrentProject(projects[currentIndex + 1])
            }
        } else {
            if (currentIndex === 0) {
                setCurrentProject(projects[projects.length - 1])
            } else {
                setCurrentProject(projects[currentIndex - 1])
            }
        }
    }

    return (
        <section className={twMerge(`my-20 ${className}`)}>
            <div className="grid grid-cols-12">
                <article className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary-dark flex items-center justify-center py-10 md:py-20 px-4 md:px-20 relative">
                    <div>
                        <h2 className="text-4xl font-semibold capitalize mb-8 md:mb-10">
                            <Trans text="home.project.title" />
                        </h2>
                        <h3 className="text-2xl font-medium capitalize mb-6 md:mb-8">
                            {currentProject.name}
                        </h3>
                        <p className="mb-8 md:mb-10">
                            {currentProject.description}
                        </p>
                        <Button
                            variant="outline"
                            href={`/project/${currentProject.id}`}
                            className="w-fit"
                        >
                            <Trans text="common.viewMore" />
                        </Button>
                    </div>
                    <div className="absolute bottom-0 right-0 flex md:translate-x-1/2">
                        <Button
                            type="square"
                            className="w-12 h-12 p-2"
                            onClick={() => handleChangeProject("prev")}
                        >
                            <MdArrowBack className="text-2xl" />
                        </Button>
                        <Button
                            type="square"
                            variant="secondary"
                            className=" w-12 h-12 p-2"
                            onClick={() => handleChangeProject("next")}
                        >
                            <MdArrowForward className="text-2xl" />
                        </Button>
                    </div>
                </article>
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <img
                        src={currentProject.featuredImage}
                        alt={currentProject.name}
                        className="h-full object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects
