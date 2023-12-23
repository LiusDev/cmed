import { Project } from "@/types";
import { Button, Trans } from "../common";
import Link from "next/link";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const defaultProject: Project = {
    id: 1,
    name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam optio deserunt itaque deleniti non. Nulla autem placeat nisi seld!",
    featuredImage: "/banner.jpg",
    content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam optio deserunt itaque deleniti non. Nulla autem placeat nisi sed!",
    createdAt: "2021-09-24T08:40:51.620Z",
    modifiedAt: "2021-09-24T08:40:51.620Z",
};

const SliderItem = ({
    project,
    className,
}: {
    project: Project;
    className?: string;
}) => {
    return (
        <div
            className={twMerge(
                ` relative m-auto mb-10 transition-all duration-500 ${className}`
            )}
        >
            <div className="rounded-lg drop-shadow-md p-8 pr-36 bg-secondary flex flex-col justify-center w-6/12 gap-10">
                <h3 className="text-2xl font-semibold text-primary capitalize">
                    {project.name}
                </h3>
                <div className="flex flex-col gap-2">
                    <FaQuoteLeft />
                    <p>{project.description}</p>
                    <FaQuoteRight className="self-end" />
                </div>
                <Link
                    href={` /projects/${project.id} `}
                    className="flex items-center justify-end gap-2 text-primary"
                >
                    <Trans text="common.viewMore" />
                    <MdOutlineArrowForward className="text-xl" />
                </Link>
            </div>
            <Link
                href={` /projects/${project.id} `}
                className="absolute top-20 right-0 w-7/12 aspect-21/9 rounded-lg overflow-hidden group shadow-md"
            >
                <img
                    src={project.featuredImage}
                    alt={project.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
            </Link>
        </div>
    );
};

interface ProjectsProps {
    projects: Project[];
}

enum Direction {
    Left = "left",
    Right = "right",
}

const Projects = ({ projects }: ProjectsProps) => {
    const [currProject, setCurrProject] = useState(
        projects[0] || defaultProject
    );
    const [animationClass, setAnimationClass] = useState("");

    const handleChangeProject = (dir: Direction) => {
        setAnimationClass("opacity-0");
        setTimeout(() => {
            if (dir === Direction.Left) {
                const prevProject =
                    projects[
                        projects.findIndex(
                            (project) => project.id === currProject.id
                        ) - 1
                    ];
                setCurrProject(
                    prevProject ||
                        projects[projects.length - 1] ||
                        defaultProject
                );
            } else {
                const nextProject =
                    projects[
                        projects.findIndex(
                            (project) => project.id === currProject.id
                        ) + 1
                    ];
                setCurrProject(nextProject || projects[0] || defaultProject);
            }
            setAnimationClass("opacity-100");
        }, 500);
    };
    return (
        <section className="bg-secondary">
            <div className="container px-4 pt-32 pb-52 m-auto">
                <h1 className="text-4xl uppercase font-bold text-primary flex items-center justify-end pr-16">
                    <Trans text="home.project.title" />
                </h1>
                <SliderItem project={currProject} className={animationClass} />
                <div className="w-6/12 pr-28 flex items-center justify-center gap-6">
                    <Button
                        variant="rounded-full"
                        className="p-0 w-10 h-10"
                        onClick={() => handleChangeProject(Direction.Left)}
                    >
                        <MdOutlineArrowBack className="text-2xl" />
                    </Button>
                    <Button
                        variant="rounded-full"
                        className="p-0 w-10 h-10"
                        onClick={() => handleChangeProject(Direction.Right)}
                    >
                        <MdOutlineArrowForward className="text-2xl" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
