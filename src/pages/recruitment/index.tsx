import { Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import { Banner } from "@/components/recruitment"
import Link from "next/link"
import type { Recruitment } from "@/types"
import { instance } from "@/utils"

interface RecruitmentProps {
    recruitment: Recruitment[]
}

const Recruitment = ({ recruitment }: RecruitmentProps) => {
    return (
        <MainLayout>
            <Banner />
            <h1 className="md:mx-40 mx-10 mt-10 text-2xl font-medium py-5 border-b-[1px] border-[#000] uppercase">
                <Trans text="recruitment.title" />
            </h1>
            {recruitment.length && (
                <div className="grid md:grid-cols-2 md:gap-2 md:px-40 px-10 my-20">
                    {recruitment.map((item, index) => (
                        <Link
                            href={`/recruitment/${item.id}`}
                            className={`col-span-1 mb-10`}
                        >
                            <div>
                                <h1 className="text-xl font-medium text-primary">
                                    {item.title}
                                </h1>
                                <div className="text-sm">{item.deadline}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            {!recruitment.length && (
                <div className="px-40 py-20">
                    <Trans text="recruitment.noData" />
                </div>
            )}
        </MainLayout>
    )
}

export const getServerSideProps = async () => {
    const recruitment: Recruitment[] =
        (await instance.get(`/recruitment?perPage=20`)).data || []

    return {
        props: {
            recruitment,
        },
    }
}

export default Recruitment
