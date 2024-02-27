import Link from "next/link";
import { Button, Trans } from "../common";
import { MdArrowForwardIos } from "react-icons/md";
import type { Service } from "@/types";
import { twMerge } from "tailwind-merge";

const Card = ({ service }: { service: Service }) => {
  return (
    <article className="flex flex-col gap-4 h-full">
      <Link
        href={`/service/detail`}
        className="aspect-square overflow-hidden group"
      >
        <img
          src={service.featuredImage}
          alt={service.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </Link>
      <Link href={`/service/detail`}>
        <h3 className="text-xl font-semibold">{service.name}</h3>
      </Link>
      <p className="line-clamp-4 mb-2">{service.description}</p>
      <Button href={`/service/detail`} variant="outline" className="w-fit">
        <Trans text="common.viewMore" />
      </Button>
    </article>
  );
};

interface ServiceProps {
  services: Service[];
  className?: string;
}

const Services = ({ services, className = "" }: ServiceProps) => {
  return (
    <section className={twMerge(` my-20 ${className}`)}>
      <div className="container px-4 m-auto">
        <div className="relative flex flex-col lg:flex-row items-center justify-center mb-20">
          <h2 className="capitalize font-semibold md:text-4xl text-2xl text-center mb-4 lg:w-1/2 w-full leading-snug">
            <Trans text="home.service.title" />
          </h2>
          <Link
            href="/service"
            className="absolute right-0 -bottom-5 md:bottom-0 ml-auto flex items-center justify-center gap-1 text-sm z-10"
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
  );
};

export default Services;
