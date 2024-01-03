import Link from "next/link"
import { Button, Trans } from "../common"
import { MdArrowForwardIos } from "react-icons/md"
import type { Service } from "@/types"
import { twMerge } from "tailwind-merge"

const Card = ({ service }: { service: Service }) => {
    return (
        <article className="flex flex-col gap-4">
            <Link
                href={`/service/${service.id}`}
                className="aspect-square overflow-hidden group"
            >
                <img
                    src={service.featuredImage}
                    alt={service.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </Link>
            <Link href={`/service/${service.id}`}>
                <h3 className="text-xl font-semibold">{service.name}</h3>
            </Link>
            <p className="line-clamp-4 mb-2">{service.description}</p>
            <Button
                href={`/service/${service.id}`}
                variant="outline"
                className="w-fit"
            >
                <Trans text="common.viewMore" />
            </Button>
        </article>
    )
}

interface ServiceProps {
    services: Service[]
    className?: string
}

const Services = ({ services, className = "" }: ServiceProps) => {
    return (
        <section className={twMerge(` my-20 ${className}`)}>
            <div className="container px-4 m-auto">
                <h2 className="capitalize font-semibold text-4xl text-center mb-4">
                    <Trans text="home.service.title" />
                </h2>
                <div className="flex items-center justify-end mb-8">
                    <Link
                        href="/service"
                        className="flex items-center justify-center gap-1 text-sm"
                    >
                        <Trans text="home.service.viewMore" />
                        <MdArrowForwardIos className="text-xs" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
                    {services &&
                        services.map((service) => (
                            <Card key={service.id} service={service} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Services
