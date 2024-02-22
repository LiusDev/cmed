import { Partner } from "@/types"
import { twMerge } from "tailwind-merge"
import { Carousel } from "@mantine/carousel"
import { Trans } from "../common"
import type { Staff } from "@/types"

interface PersonnelProps {
    staffs: Staff[]
    className?: string
}

const Personnel = ({ staffs, className = "" }: PersonnelProps) => {
    return (
        <section id="staff" className={twMerge(`my-20 ${className}`)}>
            <div className="bg-[url('/about/personnel/bg.png')] flex items-center justify-center lg:w-[500px] w-full h-40 mx-auto">
                <h2 className=" text-center text-4xl font-semibold mt-10 text-[#000]">
                    <Trans text="about.personnel.title" />
                </h2>
            </div>
            <div className="container m-auto px-4">
                {staffs.length > 0 && (
                    <Carousel
                        withIndicators
                        height={600}
                        slideSize={{
                            base: "100%",
                            sm: "50%",
                            md: "33.333333%",
                        }}
                        slideGap={{ base: 0, sm: "md" }}
                        loop
                        align="start"
                        controlSize={40}
                    >
                        {staffs.map((staff) => (
                            <Carousel.Slide key={staff.id}>
                                <div className="h-full w-full mt-32">
                                    <img
                                        src={staff.featuredImage}
                                        alt={staff.name}
                                        className="object-contain mx-auto"
                                    />
                                    <div className="mx-auto h-20 text-center px-10">
                                        <div className="text-xl font-medium pt-5">
                                            {staff.name}
                                        </div>
                                        <div className="text-base italic py-3">
                                            {staff.position}
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                )}
            </div>
        </section>
    )
}

export default Personnel
