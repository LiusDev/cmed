import { MdOutlineArrowForward } from "react-icons/md";
import { Button, Card, Trans } from "../common";
import { Service } from "@/types";

interface ServicesProps {
    services: Service[];
}

const Services = ({ services }: ServicesProps) => {
    return (
        <section className="bg-secondary-dark">
            <div className="container px-4 py-32 m-auto">
                <div className="flex items-center justify-between mb-20">
                    <h1 className="text-4xl uppercase font-bold">
                        <Trans text="home.service.title" />
                    </h1>
                    <Button
                        href="/services"
                        size="small"
                        className="flex items-center justify-center gap-2"
                    >
                        <Trans text="common.viewMore" />
                        <MdOutlineArrowForward className="text-xl" />
                    </Button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                    {services.map(
                        ({ id, name, description, featuredImage }) => (
                            <Card
                                key={id}
                                className="flex flex-col items-center justify-center px-4 py-8"
                            >
                                <img
                                    src={featuredImage}
                                    alt={name}
                                    className="object-cover h-32 mb-6"
                                />
                                <h3 className="text-xl font-semibold mb-4 text-center">
                                    {name}
                                </h3>
                                <p className="text-xs">{description}</p>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Services;
