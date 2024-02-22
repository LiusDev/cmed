import { Article, Banner, Testimonials, Vision } from "@/components/about"
import Personnel from "@/components/about/Personnel"
import { MainLayout } from "@/components/layout"
import type { Staff } from "@/types"
import { instance } from "@/utils"

interface PersonnelProps {
    staffs: Staff[]
}

const AboutPage = ({ staffs }: PersonnelProps) => {
    console.log(staffs)
    return (
        <MainLayout>
            <Banner />
            <Article />
            <Testimonials />
            <Vision />
            <Personnel staffs={staffs} />
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const staffs: Staff[] = (await instance.get("/staffs")).data || []

    return {
        props: {
            staffs,
        },
    }
}

export default AboutPage
