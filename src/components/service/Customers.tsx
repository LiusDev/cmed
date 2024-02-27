import { Customer } from "@/types";
import { twMerge } from "tailwind-merge";
import { Trans } from "../common";
import { Carousel } from "@mantine/carousel";

interface CustomersProps {
  customers: Customer[];
  className?: string;
}

const Customers = ({ customers, className = "" }: CustomersProps) => {
  return (
    <section className={twMerge(` bg-secondary-dark ${className}`)}>
      <div className="container m-auto w-full">
        <h2 className="text-center text-4xl font-semibold py-10 ">
          <Trans text="home.customer.title" />
        </h2>
        <Carousel
          height={500}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          controlSize={40}
          className="flex justify-center items-center lg:px-12 pb-20"
        >
          {customers.map((customer) => (
            <Carousel.Slide key={customer.id}>
              <div className="px-8 bg-secondary w-full h-full flex flex-col items-center">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="object-cover object-center h-48 mb-16"
                />
                <h3 className="text-center text-3xl font-medium mb-8">
                  {customer.name}
                </h3>

                <p className="text-center text-lg">{customer.description}</p>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Customers;
