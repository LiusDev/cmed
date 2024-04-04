import { MainLayout } from "@/components/layout";
import { instance } from "@/utils";
import { Banner, Services, WhyUs } from "@/components/service";
import type { Service } from "@/types";
import type { GetServerSidePropsContext } from "next";
import News from "@/components/service/News";
import ConstServices from "../../components/service/ConstServices";

const ServiceDetail = (props: {
    isNumber: boolean
    service: Service;
    services: Service[];
}) => {
    return (
        <MainLayout>
            <Banner title={props.service.name} description={props.service.description} />
            {props.isNumber ? <Services services={props.services} /> : <ConstServices services={props.services} />}
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

    const [services] = await Promise.all([
        instance
            .get<Service[]>("/constservices", {
                params: {
                    sortBy: "index",
                    order: "asc"
                }
            }).then(r => r.data)
    ])

    const index = Object.keys(config).map(Number).filter(
        i => config[i as keyof typeof config] ===  context.query.id
      )[0]

    return {
        props: {
            service: services.find(i=>i.id == index), services, isNumber: false
        }
    }
}

const config = {
    1: "benh-vien",
    2: "vien-duong-lao",
    3: "phong-kham-da-khoa",
    4: "phong-kham-chuyen-khoa"
  }

export default ServiceDetail;
