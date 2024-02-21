import { Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import React from "react"
import ContactForm from "@/components/contact/ContactForm"

const ContactPage = () => {
    return (
        <MainLayout>
            <div className="container m-auto px-4 mt-28">
                <h1 className="pb-8 mb-20 text-center border-b border-tertiary/50 text-2xl md:text-4xl uppercase">
                    <Trans text="contact.title" />
                </h1>
                <img src="/contact/map.png" alt="Map" className="my-20" />
                <h2 className="text-center mb-8 text-lg md:text-2xl">
                    <Trans text="contact.description" />
                </h2>
                <ContactForm className="mb-20" />
            </div>
        </MainLayout>
    )
}

export default ContactPage
