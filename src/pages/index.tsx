import { MainLayout } from "@/components/layout"
import { Banner, Project, Service } from "@/sections"

export default function Home() {
    return (
        <MainLayout>
            <main>
                <Banner />
                <Service />
                <Project />
            </main>
        </MainLayout>
    )
}
