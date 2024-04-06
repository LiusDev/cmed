import React, { useMemo, useState } from "react";
import type { Service2 } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";
import { useEffect } from "react";
import FeaturedImage from "./FeaturedImage";
interface ServicesProps {
  services: Service2["content"];
}

const Services2 = ({ services }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelect = (service: {
    title: string
    content: string
    featuredImage: string;
    featuredImage2: string;
    logo: string
    index: number
  }) => {
    setSelectedService(service);
  };

  useEffect(() => {
    setSelectedService(services[0]);
  }, [services]);

  const title = useMemo(() => services.sort((a, b) => a.index - b.index).map((service, index) => {
    const className = `${selectedService === service
      ? "bg-primary text-secondary-dark scale-110"
      : "bg-[#fff]"
      } w-full flex flex-col justify-center items-center cursor-pointer text-base font-medium transition-all`
    return (
      <div
        key={index}
        className={className}
        onClick={() => handleSelect(service)}
      >
        <img src={service.logo} className="w-10 h-10 mb-2" alt="icon" />
        {service.title}
      </div>
    );
  }), [selectedService, services])

  const content = useMemo(() => <>
    <FeaturedImage featuredImage={selectedService.featuredImage} featuredImage2={selectedService.featuredImage2} />

    <div className="flex flex-col justify-center lg:w-1/2 px-10 space-y-10">
      <h2 className="text-3xl font-bold text-primary text-justify">
        {selectedService.title}
      </h2>
      <div className="text-justify">{parse(selectedService.content)}</div>
    </div>
  </>, [selectedService])

  return (
    <div className="py-20 bg-[#f4f5f9] z-30 relative">
      <div className="h-40 md:w-3/5 w-full bg-[#fff] shadow-custom mx-auto -translate-y-40 flex">
        {title}
      </div>
      <div className="flex flex-col lg:flex-row xl:px-60">
        {content}
      </div>
    </div>
  );
};

export default Services2;
