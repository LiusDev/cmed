import React from "react";
import { Card, Trans } from "../common";
import { Customer } from "@/types";

interface CustomersProps {
    customers: Customer[];
}

const Customers = ({ customers }: CustomersProps) => {
    return (
        <section className="bg-secondary-dark py-32">
            <div className="container m-auto px-4">
                <h1 className="text-4xl uppercase text-center mb-20 font-bold">
                    <Trans text="home.customer.title" />
                </h1>
            </div>
            <div className="px-4 flex items-center justify-center gap-8">
                {customers.map(({ id, name, image, description }) => (
                    <Card
                        key={id}
                        className="w-1/6 rounded-xl flex flex-col justify-center gap-6 py-4 px-8 overflow-hidden transition-all group"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="h-[120px] object-contain m-auto"
                        />
                        <div className="translate-y-9 group-hover:translate-y-0 transition-all">
                            <h3 className="capitalize text-2xl font-semibold mb-2 line-clamp-1">
                                {name}
                            </h3>
                            <p className="line-clamp-1 opacity-0 group-hover:opacity-100 transition-all">
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
