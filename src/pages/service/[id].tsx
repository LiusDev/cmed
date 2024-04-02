import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { Service } from "@/types";
import type { GetServerSidePropsContext } from "next";
import News from "@/components/service/News";

const ServiceDetail = (props: {
    service: Service;
    services: Service[];
}) => {

    return (
        <MainLayout>
            <Banner title={props.service.name} />
            <Services services={props.services} />
            <News />
            <WhyUs />
        </MainLayout>
    );
};


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const serviceId = context.params?.id as string
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
            service, services
        }
    }
}

export default ServiceDetail;
