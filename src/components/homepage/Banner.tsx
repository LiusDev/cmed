import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Button, Trans } from "../common";
import { doGet } from "../../utils";
import { Banner } from "../../types";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";

const Slider = ({ banners }: { banners?: Banner[] }) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }))

  if (banners == null) return <></>

  return <div className="absolute bg-primary w-full h-full top-0 left-0 -z-10">
    <Carousel plugins={[autoplay.current]} nextControlProps={{ style: { display: "none" } }} previousControlProps={{ style: { display: "none" } }} className="w-full h-full" styles={{
      viewport: {
        height: "100%"
      },
      container: {
        height: "100%"
      }
    }}>
      {banners.map((b, index) => <CarouselSlide key={index} className="w-full h-full">
        <img title={b.name} src={b.image} className="object-cover w-full h-full" />
      </CarouselSlide>)}
    </Carousel>
  </div>
}

const Banner = ({ banners }: { banners: Banner[] }) => {
  return (
    <section className="mt-16">
      <div className="bg-no-repeat bg-center bg-cover grid grid-cols-12 relative overflow-hidden">
        <Slider banners={banners} />
        <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-[#7493BC]/70 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
          <div className="text-secondary">
            <h1 className="text-7xl font-bold mb-12">
              <Trans text="home.banner.title" />
            </h1>
            <p className="mb-12 text-lg font-light">
              <Trans text="home.banner.description" />
            </p>
            <div className="flex gap-4">
              <Button>
                <Trans text="home.banner.buttonContent" />
              </Button>
              <Button variant="secondary">
                <Trans text="home.banner.buttonContent" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
