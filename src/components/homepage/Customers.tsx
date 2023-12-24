import React from "react";
import { Card, Trans } from "../common";
import { Customer } from "@/types";

interface CustomersProps {
    customers: Customer[];
}

const Customers = ({ customers }: CustomersProps) => {
    return (
        <section className="bg-secondary-dark py-20 lg:py-32">
            <div className="container m-auto px-4">
                <h1 className="text-2xl lg:text-4xl uppercase text-center mb-10 lg:mb-20 font-bold">
                    <Trans text="home.customer.title" />
                </h1>
            </div>
            <div className="px-4 flex flex-wrap items-center justify-center gap-4 lg:gap-8">
                {customers.map(({ id, name, image, description }) => (
                    <Card
                        key={id}
                        className="lg:w-1/4 xl:w-1/6 rounded-xl flex flex-col justify-center gap-2 lg:gap-6 py-4 px-8 overflow-hidden transition-all group"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="h-[100px] lg:h-[120px] object-contain m-auto"
                        />
                        <div className="translate-y-9 group-hover:translate-y-0 transition-all">
                            <h3 className="capitalize text-lg lg:text-2xl font-semibold mb-2 line-clamp-1">
                                {name}
                            </h3>
                            <p className="text-sm lg:text-base line-clamp-1 opacity-0 group-hover:opacity-100 transition-all">
                                {description}
                            </p>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Customers;
