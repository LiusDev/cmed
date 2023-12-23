import { MainLayout } from "@/components/layout";
import {
    About,
    Customers,
    Partners,
    Projects,
    Services,
} from "@/components/homepage";
import { instance } from "@/utils";
import { Customer, Partner, Project, Service } from "@/types";
import { InferGetStaticPropsType } from "next";

interface HomeProps {
    services: InferGetStaticPropsType<typeof getStaticProps>["services"];
    projects: InferGetStaticPropsType<typeof getStaticProps>["projects"];
    partners: InferGetStaticPropsType<typeof getStaticProps>["partners"];
    customers: InferGetStaticPropsType<typeof getStaticProps>["customers"];
}

export default function Home({
    services,
    projects,
    partners,
    customers,
}: HomeProps) {
    return (
        <MainLayout>
            <Services services={services} />
            <Projects projects={projects} />
            <About />
            <Partners partners={partners} />
            <Customers customers={customers} />
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const services: Service[] =
        (await instance.get("/services?perPage=5")).data || [];

    const projects: Project[] =
        (await instance.get("/projects?perPage=10")).data || [];

    const partners: Partner[] = (await instance.get("/partners")).data || [];

    const customers: Customer[] = (await instance.get("/customers")).data || [];

    return {
        props: {
            services,
            projects,
            partners,
            customers,
        },
        revalidate: 30,
    };
};
