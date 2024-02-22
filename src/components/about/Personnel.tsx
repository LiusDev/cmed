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
            <div className="relative container flex items-center justify-center w-full h-32 mx-auto">
                <div className="absolute bg-[url('/about/personnel/bg.png')] w-full h-[500px] translate-y-40"></div>
                <h2 className="relative text-center text-4xl font-semibold mt-10 text-secondary-dark drop-shadow">
                    <Trans text="about.personnel.title" />
                </h2>
            </div>
            <div className="container m-auto px-4">
                {staffs.length > 0 && (
                    <Carousel
                        height={600}
                        slideSize={{
                            base: "50%",
                            sm: "33.333333333%",
                            md: "25%",
                        }}
                        slideGap={{ base: 0, sm: "md" }}
                        loop
                        align="start"
                        controlSize={40}
                    >
                        {staffs.map((staff) => (
                            <Carousel.Slide key={staff.id}>
                                <div className="h-full w-full mt-32 flex flex-col">
                                    <img
                                        src={staff.featuredImage}
                                        alt=""
                                        className="h-96 object-cover object-top"
                                    />
                                    <div className="mx-auto h-20 text-center px-10 relative">
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
