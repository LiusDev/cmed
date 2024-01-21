import { Article, Banner, Customers, Target } from "@/components/service"
import { MainLayout } from "@/components/layout"
import React from "react"
import type { Customer } from "@/types"
import { Trans } from "@/components/common"
import { instance } from "@/utils"
import { InferGetServerSidePropsType } from "next"

interface ServicePageProps {
    customers: InferGetServerSidePropsType<typeof getStaticProps>["customers"]
}

const ServicePage = ({ customers } : ServicePageProps) => {
    return <MainLayout>
        <Banner />

        <div className="flex w-full flex-col items-center px-72 py-40 space-y-24 relative">

            <div className="bg-white h-20 text-center font-bold w-2/5 space-y-2">
                <h2 className="text-[#ff0000] text-2xl"><Trans text="services.group223.header" /></h2>
                <h1 className="text-3xl text-primary"><Trans text="services.group223.slogan" /></h1>
            </div>

            <div className="">
                <img src="/service/article/img.png" className="" alt="image" />
            </div>

            <Article />
        </div>

        <Target />
        <Customers customers={customers} />

    </MainLayout>
}

export default ServicePage


export const getStaticProps = async () => {
    const customers: Customer[] = (await instance.get("/customers")).data || []

    return {
        props: {
            customers
        },
        revalidate: 30
    }
}

