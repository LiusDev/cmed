import { Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import React, { useEffect, useMemo, useState } from "react"
import ContactForm from "@/components/contact/ContactForm"
import { doGet } from "../utils"
import { Metadata } from "../types"
import { useTranslation } from "react-i18next"

const ContactInfo = () => {
    const { t, i18n } = useTranslation()
    const [data, setData] = useState<{ [key: string]: string }>()
    const lang = useMemo(() => {
        switch (i18n.language) {
            case "vi": return ""
            default: return i18n.language
        }
    }, [i18n.language]).toUpperCase()


    useEffect(() => {
        doGet("/metadata").then(res => {
            const metadata: Metadata = res.data
            const newData: { [key: string]: string } = {}
            newData[t(`contact.company`)] = metadata[`companyName${lang}` as keyof Metadata] as string
            newData[t(`contact.hotline`)] = metadata[`companyPhone${lang}` as keyof Metadata] as string
            newData[t(`contact.email`)] = metadata[`companyEmail${lang}` as keyof Metadata] as string
            newData[t(`contact.address`)] = metadata[`companyAddress${lang}` as keyof Metadata] as string
            setData(newData)
        })
    }, [i18n.language])

    return <div className="mb-8 text-lg md:text-2xl">
        {
            data && <div className="flex flex-col gap-2 w-fit m-auto">
                {
                    Object.keys(data).map((k) => <div className="grid grid-cols-4">
                        <p className="col-span-1 font-thin">{k}</p>
                        <p className="col-span-3 pl-20">{data[k]}</p>
                    </div>)
                }
            </div>
        }

        <h1 className="pb-8 mt-20 mb-20 text-center border-b border-tertiary/50 text-2xl md:text-4xl uppercase">
        </h1>
    </div>
}

const ContactPage = () => {

    return (
        <MainLayout title="Contact">
            <div className="container m-auto px-4 mt-28">
                <h1 className="pb-8 mb-20 text-center border-b border-tertiary/50 text-2xl md:text-4xl uppercase">
                    <Trans text="contact.title" />
                </h1>
                <ContactInfo />
                <iframe className="w-full h-[600px] mb-10 px-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.818612749245!2d105.80212867491264!3d20.999906888769637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad8eab375fc3%3A0x3d91012ea2243087!2zQ8O0bmcgdHkgQ-G7lSBwaOG6p24gVMawIHbhuqVuIHbhuq1uIGjDoG5oIHbDoCBLaW5oIGRvYW5oIFkgdOG6vyBDbWVk!5e0!3m2!1svi!2s!4v1712110904157!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                <h2 className="text-center mb-8 text-lg md:text-2xl">
                    <Trans text="contact.description" />
                </h2>
                <ContactForm className="mb-20" />
            </div>
        </MainLayout>
    )
}

export default ContactPage
