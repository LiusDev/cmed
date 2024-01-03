import { twMerge } from "tailwind-merge"
import { Trans } from "../common"

interface AboutProps {
    className?: string
}

const About = ({ className }: AboutProps) => {
    return (
        <section className={twMerge(`my-20 ${className}`)}>
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 py-10 lg:py-20 px-4 lg:px-20">
                    <h2 className="capitalize text-4xl md:text-6xl leading-normal md:border-b-2 border-tertiary pb-4 font-semibold text-center md:text-left">
                        <Trans text="home.about.title" />
                    </h2>
                </div>
                <div className="hidden md:block col-span-12 md:col-span-6 lg:col-span-8 bg-primary-dark relative">
                    <div className="absolute right-1/2 translate-x-1/2">
                        <img
                            src="/home/about.png"
                            alt="About"
                            className="h-[600px]"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-secondary-dark md:w-1/2 px-4 md:px-20 lg:p-20">
                <p>
                    <Trans text="home.about.description" />
                </p>
            </div>
        </section>
    )
}

export default About
