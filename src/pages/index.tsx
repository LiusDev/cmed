import { MainLayout } from "@/components/layout";
import { Projects, Services } from "@/components/homepage";
import { instance } from "@/utils";
import { Project, Service } from "@/types";
import { InferGetStaticPropsType } from "next";

interface HomeProps {
    services: InferGetStaticPropsType<typeof getStaticProps>["services"];
    projects: InferGetStaticPropsType<typeof getStaticProps>["projects"];
}

export default function Home({ services, projects }: HomeProps) {
    return (
        <MainLayout>
            <Services services={services} />
            <Projects projects={projects} />
        </MainLayout>
    );
}

export const getStaticProps = async () => {
    const services: Service[] =
        (await instance.get("/services?perPage=5")).data || [];

    const projects: Project[] =
        (await instance.get("/projects?perPage=10")).data || [];

    return {
        props: {
            services,
            projects,
        },
        revalidate: 30,
    };
};
