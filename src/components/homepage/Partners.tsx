import { Partner } from "@/types"
import { twMerge } from "tailwind-merge"
import { Carousel } from "@mantine/carousel"
import { Trans } from "../common"

interface PartnerProps {
    partners: Partner[]
    className?: string
}

const Partners = ({ partners, className = "" }: PartnerProps) => {
    return (
        <section className={twMerge(`my-20 ${className}`)}>
            <div className="container m-auto px-4">
                <h2 className="text-center text-4xl font-semibold mb-10 ">
                    <Trans text="home.partner.title" />
                </h2>
                <Carousel
                    withIndicators
                    height={300}
                    slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                    slideGap={{ base: 0, sm: "md" }}
                    loop
                    align="start"
                    controlSize={40}
                >
                    {partners.map((partner) => (
                        <Carousel.Slide key={partner.id}>
                            <div className="px-8 py-4 bg-secondary-dark h-full flex items-center justify-center">
                                <img
                                    src={partner.image}
                                    alt={partner.name}
                                    className="object-contain h-full"
                                />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Partners
