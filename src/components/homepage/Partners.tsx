import React from "react";
import { Card, Trans } from "../common";
import { Partner } from "@/types";

interface PartnersProps {
    partners: Partner[];
}

const Partners = ({ partners }: PartnersProps) => {
    return (
        <section className="bg-secondary py-32">
            <div className="px-4 container m-auto">
                <h1 className="text-primary text-4xl uppercase font-bold text-center mb-20">
                    <Trans text="home.partner.title" />
                </h1>
            </div>
            <div className="flex items-center justify-center gap-8">
                {partners.map(({ id, name, image }) => (
                    <Card
                        key={id}
                        className="w-1/6 p-4 rounded-xl flex items-center justify-center"
                    >
                        <img
                            src={image}
                            alt={name}
                            className="h-[120px] object-contain"
                        />
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Partners;
