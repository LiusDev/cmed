import { SectionHeader } from "@/components/common"
import React from "react"
import { useTranslation } from "react-i18next"

const About = () => {
    const { t } = useTranslation()
    return (
        <section className="container m-auto py-32 px-3">
            <div className="grid grid-cols-2 gap-12">
                <img
                    src="about.jpeg"
                    alt=""
                    className="w-full aspect-square object-cover"
                />
                <div>
                    <SectionHeader
                        title={t("home.about.title")}
                        align="left"
                        className="col-span-1 mb-4"
                    >
                        {t("home.about.description")}
                    </SectionHeader>
                    <p className="text-tertiary-dark/70 leading-8 text-lg">
                        {t("home.about.content")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
