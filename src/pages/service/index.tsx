import { Article, Banner, Customers, Target } from "@/components/service"
import { MainLayout } from "@/components/layout"
import React from "react"
import { Trans } from "@/components/common"

const ServicePage = () => {
    return <MainLayout>
        <Banner />

        <div className="flex w-full flex-col items-center px-72 py-40 space-y-24 relative">

            <div className="bg-white h-20 text-center font-bold w-2/5 space-y-2">
                <h2 className="text-[#ff0000] text-2xl"><Trans text="service.group223.header" /></h2>
                <h1 className="text-3xl text-primary"><Trans text="service.group223.slogan" /></h1>
            </div>

            <div className="">
                <img src="/service/article/img.png" className="" alt="image" />
            </div>

            <Article />
        </div>

        <Target />
        <Customers />

    </MainLayout>
}

export default ServicePage
