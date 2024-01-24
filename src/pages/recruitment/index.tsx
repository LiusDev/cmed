import { Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import { Banner } from "@/components/recruitment"
import { Grid } from "@mantine/core"

const recruitment = [
    {
        title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
        link: "ky-su-tu-dong-hoa",
        deadline: "26/01/2024",
    },
    {
        title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
        link: "ky-su-tu-dong-hoa",
        deadline: "26/01/2024",
    },
    {
        title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
        link: "ky-su-tu-dong-hoa",
        deadline: "26/01/2024",
    },
    {
        title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
        link: "ky-su-tu-dong-hoa",
        deadline: "26/01/2024",
    },
]

const Recruitment = () => {
    return (
        <MainLayout>
            <Banner />
            <section className="container m-auto px-4 my-16">
                <h1 className="mx-40 mt-10 text-2xl font-medium py-5 border-b-[1px] border-tertiary-dark/20 uppercase">
                    <Trans text="recruitment.title" />
                </h1>
                {recruitment.length && (
                    <Grid className="px-40 py-20 w-full">
                        {recruitment.map((post, index) => {
                            return (
                                <Grid.Col span={5} className="" key={index}>
                                    <h2>{post.title}</h2>
                                </Grid.Col>
                            )
                        })}
                    </Grid>
                )}
                {!recruitment.length && (
                    <div className="px-40 py-20">
                        <Trans text="recruitment.noData" />
                    </div>
                )}
            </section>
        </MainLayout>
    )
}

export default Recruitment
