import { Customer } from "@/types"
import { twMerge } from "tailwind-merge"
import { Trans } from "../common"
import { Carousel } from "@mantine/carousel"

interface CustomersProps {
    customers: Customer[]
    className?: string
}

const Customers = ({ customers, className = "" }: CustomersProps) => {
    return (
        <section className={twMerge(`my-20 ${className}`)}>
            <div className="container m-auto px-4">
                <h2 className="text-center text-4xl font-semibold mb-10">
                    <Trans text="home.customer.title" />
                </h2>
                <Carousel
                    withIndicators
                    height={600}
                    slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                    slideGap={{ base: 0, sm: "md" }}
                    loop
                    align="start"
                    controlSize={40}
                >
                    {customers.map((customer) => (
                        <Carousel.Slide key={customer.id}>
                            <div className="px-8 py-4 bg-secondary-dark h-full flex flex-col items-center justify-center">
                                <img
                                    src={customer.image}
                                    alt={customer.name}
                                    className="object-contain mb-16"
                                />
                                <h3 className="text-center text-3xl font-medium mb-8">
                                    {customer.name}
                                </h3>

                                <p className="text-center text-lg">
                                    {customer.description}
                                </p>
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Customers
