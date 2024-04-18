import type { FC } from "react"
import { Button, Trans } from "../common"

interface BannerProps {
    title?: string
    description?: string | false
    hiddenButton?: true
}

const Banner: FC<BannerProps> = ({ title, description }) => {
    return (
        <section className="mt-16">
            <div className="bg-[url('/home/home-banner.webp')] bg-no-repeat bg-center bg-cover grid grid-cols-12 relative overflow-hidden">
                <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-[#7493BC]/70 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
                    <div className="text-secondary">
                        <h1 className="text-7xl font-bold mb-12">
                            {title ?? <Trans text="services.banner.title" />}
                        </h1>
                        <p className="mb-12 text-lg font-light">
                            {!description ? (
                                <></>
                            ) : (
                                description ?? (
                                    <Trans text="services.banner.description" />
                                )
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
