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
