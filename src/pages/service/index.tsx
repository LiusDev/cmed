import { Article, Banner, Customers, Target } from "@/components/service"
import { MainLayout } from "@/components/layout"
import React, { useEffect, useState } from "react"
import type { Customer } from "@/types"
import { Trans } from "@/components/common"
import { instance } from "@/utils"

const ServicePage = () => {
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customers: Customer[] =
                    (await instance.get("/customers")).data || []
                setCustomers(customers)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])
    return (
        <MainLayout>
            <Banner />
            <div className="flex w-full min-h-[1000px] flex-col items-center lg:px-72 py-20 lg:py-40 space-y-24 relative">
                <div className="bg-white h-20 mb-28 lg:mb-0 text-center font-bold lg:w-2/5 space-y-2">
                    <h2 className="text-[#ff0000] text-2xl">
                        <Trans text="services.group223.header" />
                    </h2>
                    <h1 className="text-3xl text-primary">
                        <Trans text="services.group223.slogan" />
                    </h1>
                </div>

                <div className="hidden md:block">
                    <img
                        src="/service/article/img.png"
                        className=""
                        alt="image"
                    />
                </div>

                <Article />
            </div>

            <Target />
            <Customers customers={customers} />
        </MainLayout>
    )
}

export default ServicePage
