import { Carousel } from "@mantine/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import style from "./style.module.css"
import { Button, SectionHeader } from "@/components/common"
import React from "react"
import { useTranslation } from "react-i18next"

const projectList = [
    {
        title: "home.project.project1.title",
        description: "home.project.project1.description",
        href: "/",
        image: "project.jpeg",
    },
    {
        title: "home.project.project2.title",
        description: "home.project.project2.description",
        href: "/",
        image: "project.jpeg",
    },
    {
        title: "home.project.project3.title",
        description: "home.project.project3.description",
        href: "/",
        image: "project.jpeg",
    },
]

const Project = () => {
    const { t } = useTranslation()
    const autoplay = useRef(Autoplay({ delay: 4000 }))

    return (
        <div className="bg-secondary-dark">
            <section className="container m-auto py-32 px-3">
                <SectionHeader title={t("home.project.title")}>
                    {t("home.project.description")}
                </SectionHeader>
                <Carousel
                    withControls={false}
                    withIndicators
                    controlsOffset="xs"
                    slideGap={{ base: 0, sm: "xl" }}
                    loop
                    align="center"
                    plugins={[autoplay.current]}
                    onMouseEnter={autoplay.current.stop}
                    onMouseLeave={autoplay.current.reset}
                    classNames={style}
                >
                    {projectList.map((project) => (
                        <Carousel.Slide key={project.title}>
                            <div className="mb-32 relative">
                                <img
                                    src={project.image}
                                    alt=""
                                    className="rounded-sm object-cover w-3/5 aspect-video z-10 relative"
                                />
                                <div className="bg-primary-dark rounded-sm p-7 w-3/5 absolute -bottom-20 right-0 flex items-center justify-end">
                                    <div className="w-2/3 pl-4 text-secondary min-h-[400px] flex flex-col justify-between">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="font-semibold text-2xl mb-3">
                                                {t(project.title)}
                                            </h3>
                                            <p>{t(project.description)}</p>
                                        </div>
                                        <Button
                                            href={project.href}
                                            className="mt-5 w-fit self-end"
                                        >
                                            {t("common.viewMore")}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </section>
        </div>
    )
}

export default Project
