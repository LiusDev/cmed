import { Partner } from "@/types";
import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "../common";

interface PartnerProps {
  partners: Partner[];
  className?: string;
}

const Partners = ({ partners, className = "" }: PartnerProps) => {
  return (
    <section className={twMerge(`my-20 ${className}`)}>
      <div className="container m-auto w-full">
        <h2 className="text-center text-4xl font-semibold mb-10 ">
          <Trans text="home.partner.title" />
        </h2>
        <Carousel
          height={250}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
          align="start"
          controlSize={40}
          className="flex justify-center items-center"
        >
          {partners.map((partner) => (
            <Carousel.Slide key={partner.id}>
              <div className="w-full h-full flex items-center justify-start">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full object-cover h-full object-center"
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
