import { Banner, Services } from "@/components/homepage"
import { MainLayout } from "@/components/layout"
import type { Customer, Partner, Project, Service } from "@/types"
import { instance } from "@/utils"
import { InferGetStaticPropsType } from "next"
import React from "react"

interface HomeProps {
    services: InferGetStaticPropsType<typeof getStaticProps>["services"]
    projects: InferGetStaticPropsType<typeof getStaticProps>["projects"]
    partners: InferGetStaticPropsType<typeof getStaticProps>["partners"]
    customers: InferGetStaticPropsType<typeof getStaticProps>["customers"]
}

const Home = ({ services }: HomeProps) => {
    return (
        <MainLayout>
            <Banner />
            <Services services={services} />
        </MainLayout>
    )
}

export const getStaticProps = async () => {
    const services: Service[] =
        (await instance.get("/services?perPage=3")).data || []

    const projects: Project[] =
        (await instance.get("/projects?perPage=10")).data || []

    const partners: Partner[] = (await instance.get("/partners")).data || []

    const customers: Customer[] = (await instance.get("/customers")).data || []

    return {
        props: {
            services,
            projects,
            partners,
            customers,
        },
        revalidate: 30,
    }
}
export default Home
