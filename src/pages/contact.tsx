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
                <iframe className="w-full h-[600px] mb-10 px-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6774841946835!2d105.80112081143572!3d21.005561480557176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad964441328b%3A0x55d99271bdda1425!2sDiamond%20Flower%20Tower!5e0!3m2!1svi!2s!4v1709275361684!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                <h2 className="text-center mb-8 text-lg md:text-2xl">
                    <Trans text="contact.description" />
                </h2>
                <ContactForm className="mb-20" />
            </div>
        </MainLayout>
    )
}

export default ContactPage
