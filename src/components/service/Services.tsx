import React, { use, useState } from "react";
import type { Service } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";
import { useEffect } from "react";
interface ServicesProps {
  services: Service[];
}

const icons = [
  {
    id: 1,
    link: "/service/article/icons/icon1.webp"
  },
  {
    id: 2,
    link: "/service/article/icons/icon2.webp"
  },
  {
    id: 3,
    link: "/service/article/icons/icon3.webp"
  }
]

const Services = ({ services }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const handleSelect = (service: Service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    setSelectedService(services[0]);
  }, [services]);

  return (
    <div className="py-20 bg-[#f4f5f9]">
      <div className="h-40 md:w-3/5 w-full bg-[#fff] shadow-custom mx-auto -translate-y-40 flex">
        {services.length > 0 &&
          services.map((service, index) => {
            return (
              <div
                key={service.id}
                className={`${selectedService === service
                  ? "bg-primary text-secondary-dark scale-110"
                  : "bg-[#fff]"
                  } w-full flex flex-col justify-center items-center cursor-pointer text-base font-medium transition-all`}
                onClick={() => handleSelect(service)}
              >
                <img src={icons[index].link} className="w-10 h-10 mb-2" alt="icon" />
                {service.name}
              </div>
            );
          })}
      </div>
      <div className="flex flex-col lg:flex-row xl:px-60">
        {selectedService && (
          <>
            <div className="lg:w-1/2 px-10 pb-20">
              <div>
                <img src={selectedService.featuredImage} alt="image" />
              </div>
            </div>

            <div className="flex flex-col justify-center lg:w-1/2 px-10 space-y-10">
              <h2 className="text-3xl font-bold text-primary">
                <Trans text="services.detail.services.title" />
              </h2>
              <div className="">{parse(selectedService.content)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
