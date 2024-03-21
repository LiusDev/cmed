import { Partner } from "@/types";
import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "../common";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';

interface PartnerProps {
  partners: Partner[];
  className?: string;
}

const Partners = ({ partners, className = "" }: PartnerProps) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }))
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
          align="start"
          controlSize={40}
          className="flex justify-center items-center"
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {partners.map((partner, index) => (
            <Carousel.Slide key={index}>
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
