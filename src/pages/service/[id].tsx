import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { News, Service } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { NewsItem } from "@/components/news";
import { Trans } from "@/components/common";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { LoadingOverlay } from "@mantine/core";
import type { GetServerSideProps, GetServerSidePropsContext } from "next";

const ServiceDetail = (props: {
    service: Service;
    services: Service[];
    news: News[];
}) => {
    const [news, setNews] = useState<News[]>([]);

    return (
        <MainLayout>
            <Banner title={props.service.name} />
            <Services services={props.services} />
            <div className="flex flex-col lg:flex-row xl:px-60 mt-10 items-center">
                {props.service && (
                    <>
                        <div className="lg:w-1/2 px-10 pb-20 lg:pb-0  mt-[65px] ">
                            <div className="relative">
                                <img src={props.service.featuredImage} alt="image" className="lg:w-[80%] lg:h-[80%]" />
                                <img src={props.service.featuredImage} alt="image" className="hidden lg:block absolute w-[80%] h-auto -top-[45px] -left-[45px] -z-10" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center lg:w-1/2 px-10 space-y-10">
                            <h2 className="text-3xl font-bold text-primary">
                                <Trans text="services.detail.services.title" />
                            </h2>
                            <div className="text-justify">{parse(props.service.content)}</div>
                        </div>
                    </>
                )}
            </div>
            <WhyUs />

        </MainLayout>
    );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const serviceId = context.params?.id as string

    const [service, services, news] = await Promise.all([
        instance
            .get(`/services/${serviceId}`)
            .then(r => r.data),
        instance
            .get<Service[]>("/services", {
                params: {
                    perPage: 4,
                }
            }).then(r => r.data),
        instance
            .get<News[]>("/news?perPage=3")
            .then(r => r.data)
    ])

    return {
        props: {
            service, services, news
        }
    }
}

export default ServiceDetail;
