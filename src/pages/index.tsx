import {
    Banner,
    Customers,
    Partners,
    Projects,
    Services,
} from "@/components/homepage"
import About from "@/components/homepage/About"
import { MainLayout } from "@/components/layout"
import type { Customer, Partner, Project, Service } from "@/types"
import { instance } from "@/utils"
import { InferGetServerSidePropsType } from "next"

interface HomeProps {
    services: InferGetServerSidePropsType<typeof getServerSideProps>["services"]
    projects: InferGetServerSidePropsType<typeof getServerSideProps>["projects"]
    partners: InferGetServerSidePropsType<typeof getServerSideProps>["partners"]
    customers: InferGetServerSidePropsType<
        typeof getServerSideProps
    >["customers"]
}

const Home = ({ services, projects, partners, customers }: HomeProps) => {
    return (
        <MainLayout>
            <Banner />
            <Services services={services} />
            <Projects projects={projects} />
            <About />
            <Partners partners={partners} />
            <Customers customers={customers} />
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const services: Service[] =
        (await instance.get("/services?perPage=3")).data || []

    const projects: Project[] =
        (await instance.get("/projects?perPage=4")).data || []

    const partners: Partner[] = (await instance.get("/partners")).data || []

    const customers: Customer[] = (await instance.get("/customers")).data || []

    return {
        props: {
            services,
            projects,
            partners,
            customers,
        },
    }
}
export default Home
