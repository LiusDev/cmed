import { MainLayout } from "@/components/layout"
import { About, Banner, Group, Project, Service } from "@/sections"

export default function Home() {
    return (
        <MainLayout>
            <main>
                <Banner />
                <Service />
                <Project />
                <About />
                <Group />
            </main>
        </MainLayout>
    )
}
