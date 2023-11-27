import { Carousel } from "@mantine/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import style from "./style.module.css"
import { useTranslation } from "react-i18next"
import { Button, SectionHeader } from "@/components/common"
import { Color } from "@/components/common/Button"

const serviceList = [
    {
        i18nTitle: "home.service.service1.title",
        i18nDescription: "home.service.service1.description",
        image: "serviceDemo.jpg",
        href: "/",
    },
    {
        i18nTitle: "home.service.service2.title",
        i18nDescription: "home.service.service2.description",
        image: "serviceDemo.jpg",
        href: "/",
    },
    {
        i18nTitle: "home.service.service3.title",
        i18nDescription: "home.service.service3.description",
        image: "serviceDemo.jpg",
        href: "/",
    },
    {
        i18nTitle: "home.service.service4.title",
        i18nDescription: "home.service.service4.description",
        image: "serviceDemo.jpg",
        href: "/",
    },
    {
        i18nTitle: "home.service.service5.title",
        i18nDescription: "home.service.service5.description",
        image: "serviceDemo.jpg",
        href: "/",
    },
]

const Service = () => {
    const { t } = useTranslation()
    const autoplay = useRef(Autoplay({ delay: 4000 }))
    return (
        <section className="container m-auto py-32 px-3">
            <SectionHeader title={t("home.service.title")}>
                {t("home.service.description")}
            </SectionHeader>
            <Carousel
                withControls={false}
                withIndicators
                controlsOffset="xs"
                slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                slideGap={{ base: 0, sm: "xl" }}
                loop
                align="center"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                classNames={style}
            >
                {serviceList.map((item) => (
                    <Carousel.Slide key={item.i18nTitle}>
                        <article className="bg-secondary-dark p-7 rounded-sm mb-10 hover:shadow-lg transition-all duration-500">
                            <div className="w-full rounded-sm overflow-hidden group">
                                <img
                                    src={item.image}
                                    alt={item.i18nTitle}
                                    className="w-full object-cover rounded-sm group-hover:scale-110 transition-all duration-500"
                                />
                            </div>
                            <div className="mt-5 flex items-end justify-between">
                                <div>
                                    <p className="text-sm text-primary uppercase font-semibold mb-2">
                                        {t(item.i18nDescription)}
                                    </p>
                                    <h4 className="font-semibold text-2xl text-tertiary-dark capitalize">
                                        {t(item.i18nTitle)}
                                    </h4>
                                </div>
                                <Button color={Color.Outline} href={item.href}>
                                    {t("common.viewMore")}
                                </Button>
                            </div>
                        </article>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </section>
    )
}

export default Service
