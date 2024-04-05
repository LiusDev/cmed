import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { Service, Service2 } from "@/types";
import type { GetServerSidePropsContext } from "next";
import News from "@/components/service/News";
import ConstServices from "../../components/service/ConstServices";
import Services2 from "../../components/service/Servicess2";

const ServiceDetail = (props: {
    isNumber: boolean
    service: Service | Service2;
    services: Service[] | Service2["content"];
}) => {
    return (
        <MainLayout>
            <Banner title={props.service.name} description={props.service.description} />
            {props.isNumber ? <Services services={props.services as any} /> : <Services2 services={props.services as any} />}
            <News />
            <WhyUs />
        </MainLayout>
    );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const serviceId = context.params?.id as string
    const isNumber = !isNaN(parseInt(serviceId));


    if (isNumber) {

        const [service, services] = await Promise.all([
            instance
                .get(`/services/${serviceId}`)
                .then(r => r.data),
            instance
                .get<Service[]>("/services", {
                    params: {
                        perPage: 4,
                    }
                }).then(r => r.data)
        ])

        return {
            props: {
                service, services, isNumber: true
            }
        }
    }

    const index = Object.entries(config).find(([key, value]) => value === serviceId)![0]

    const [service] = await Promise.all([
        instance
            .get<Service2>(`/service2/${index}`, {
                params: {
                    sortBy: "index",
                    order: "asc"
                }
            }).then(r => r.data)
    ])



    return {
        props: {
            service: service,
            services: service.content
        }
    }
}

const config = {
    4: "benh-vien",
    3: "vien-duong-lao",
    2: "phong-kham-da-khoa",
    1: "phong-kham-chuyen-khoa"
}

export default ServiceDetail;
