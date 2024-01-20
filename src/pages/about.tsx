import { Article, Banner, Testimonials, Vision } from "@/components/about"
import Personnel from "@/components/about/Personnel"
import { MainLayout } from "@/components/layout"
import React from "react"

const AboutPage = () => {
    return <MainLayout>
        <Banner />
        <Article />
        <Testimonials />
        <Vision />
        <Personnel />
    </MainLayout>
}

export default AboutPage
