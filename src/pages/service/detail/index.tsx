import { MainLayout } from "@/components/layout"
import { instance } from "@/utils"
import { Banner, RelativeNews, Services, WhyUs } from "@/components/service"
import type { News, Service } from "@/types"
import { InferGetServerSidePropsType } from "next"

interface DetailProps {
    news: InferGetServerSidePropsType<typeof getServerSideProps>["news"]
    services: InferGetServerSidePropsType<typeof getServerSideProps>["services"]
}

const ServiceDetail = ({ news, services }: DetailProps) => {
    return (
        <MainLayout>
            <Banner />
            <Services services={services} />
            <WhyUs />
            <RelativeNews news={news} />
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const news: News[] = (await instance.get("/news?perPage=3")).data || []
    const services: Service[] = (await instance.get("/services")).data || []

    return {
        props: {
            news,
            services,
        },
    }
}

export default ServiceDetail
