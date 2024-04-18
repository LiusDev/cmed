import { Article, Banner, Customers, Target } from "@/components/service"
import { MainLayout } from "@/components/layout"
import React, { useEffect, useState } from "react"
import type { Customer } from "@/types"
import { Trans } from "@/components/common"
import { instance } from "@/utils"
import { useTranslation } from "react-i18next"
interface article {
    id: number
    title: string
    content: string
    image: string
    link: string
    positionArticle: string
}

const articles = [
    {
        id: 1,
        link: "/service/benh-vien",
        title: "services.article.header-1",
        content: "services.article.content-1",
        image: "/service/article/nha-3.webp",
        positionArticle: "lg:translate-x-[60%]",
        positionHover: "left-0",
    },
    {
        id: 2,
        link: "/service/vien-duong-lao",
        title: "services.article.header-2",
        content: "services.article.content-2",
        image: "/service/article/nha-1.webp",
        positionArticle: "lg:translate-x-[-50%]",
        positionHover: "right-0",
    },
    {
        id: 3,
        link: "/service/phong-kham-da-khoa",
        title: "services.article.header-3",
        content: "services.article.content-3",
        image: "/service/article/nha-2.webp",
        positionArticle: "lg:translate-x-[110%] lg:translate-y-[-100px]",
        positionHover: "left-0 bottom-0",
    },
    {
        id: 4,
        link: "/service/phong-kham-chuyen-khoa",
        title: "services.article.header-4",
        content: "services.article.content-4",
        image: "/service/article/nha-4.webp",
        positionArticle: "lg:translate-x-[-110%] lg:translate-y-[-200px]",
        positionHover: "bottom-0 md:bottom-20 right-0 ",
    },
]

const ServicePage = () => {
    const [customers, setCustomers] = useState<Customer[]>([])
    const [article, setArticle] = useState<article[]>([])
    const [t, i18n] = useTranslation()
    const handleMouseEnter = (article: article) => () => {
        setArticle([article])
    }

    const handleMouseLeave = () => {
        setArticle([])
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const customers: Customer[] =
                    (await instance.get("/customers")).data || []
                setCustomers(customers)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])
    return (
        <MainLayout title="Dịch vụ">
            <Banner
                hiddenButton
                description={t("services.banner.description")}
            />
            <div className="relative mb-20">
                <div className="mx-auto w-2/3 space-y-2 py-10 text-center font-bold md:mb-12 md:w-[500px] lg:mb-0">
                    <h2 className="text-xl text-[#ff0000] md:text-2xl">
                        <Trans text="services.group223.header" />
                    </h2>
                    <h1 className="text-2xl text-primary md:text-3xl">
                        <Trans text="services.group223.slogan" />
                    </h1>
                </div>

                <div className='relative mx-auto hidden h-[550px] w-full bg-[url("/service/article/model-2.webp")] bg-contain bg-center bg-no-repeat md:h-[500px] md:bg-[url("/service/article/model-1.webp")] lg:mt-20 lg:block lg:h-[800px] xl:h-[1000px]'>
                    {articles.map((articleItem, index) => (
                        <div
                            key={index}
                            className={` absolute z-10 h-60 w-1/2 lg:h-80  ${articleItem.positionHover}`}
                            onMouseEnter={handleMouseEnter(articleItem)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Article
                                title={articleItem.title}
                                content={articleItem.content}
                                image={articleItem.image}
                                link={articleItem.link}
                                className={` ${articleItem.positionArticle} ${article[0] === articleItem ? "block" : "hidden"}`}
                            />
                        </div>
                    ))}
                </div>

                <div className='relative mx-auto h-[550px] w-full bg-[url("/service/article/model-2.webp")] bg-contain bg-center bg-no-repeat md:h-[500px] md:bg-[url("/service/article/model-1.webp")] lg:mt-20 lg:hidden lg:h-[800px] xl:h-[1000px]'>
                    {articles.map((articleItem, index) => (
                        <div
                            key={articleItem.id}
                            className={` absolute lg:z-10 h-60 w-1/2 lg:h-80 ${articleItem.positionHover}`}
                            onMouseEnter={handleMouseEnter(articleItem)}
                            onMouseLeave={handleMouseLeave}
                        ></div>
                    ))}
                    {article.length !== 0 && (
                        <Article
                            title={article[0].title}
                            content={article[0].content}
                            image={article[0].image}
                            link={article[0].link}
                            className={` ${article[0].positionArticle}`}
                        />
                    )}
                </div>
            </div>

            <Target />
            <Customers customers={customers} />
        </MainLayout>
    )
}

export default ServicePage
