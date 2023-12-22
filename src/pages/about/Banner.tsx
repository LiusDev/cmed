import React from "react"
import { useTranslation } from "react-i18next"

const Banner = () => {
    const { t } = useTranslation()

    return (
        <section className="bg-[url(/aboutBanner.jpg)] py-36">
            <div className="container m-auto px-3">
                <h1 className="font-header text-5xl font-semibold max-w-2xl capitalize">
                    {t("about.title")}
                </h1>
            </div>
        </section>
    )
}

export default Banner
