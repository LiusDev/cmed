import { Article, Banner, Testimonials, Vision } from "@/components/about"
import Personnel from "@/components/about/Personnel"
import { MainLayout } from "@/components/layout"
import type { Staff } from "@/types"
import { instance } from "@/utils"
import { useEffect, useState } from "react"

const AboutPage = () => {
    const [staffs, setStaffs] = useState<Staff[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const staffs: Staff[] =
                    (await instance.get("/staffs")).data || []
                setStaffs(staffs)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])
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

export default AboutPage
