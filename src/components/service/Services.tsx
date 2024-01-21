import React, { useState } from "react";
import type { Service } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";

interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const handleSelect = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <div className="py-20 bg-[#f4f5f9]">
      <div className="h-40 w-3/5 bg-[#fff] shadow-custom mx-auto -translate-y-40 flex">
        {services.length > 0 &&
          services.map((service) => {
            return (
              <div
                className={`${
                  selectedService === service
                    ? "bg-primary text-secondary-dark scale-y-125"
                    : "bg-[#fff]"
                } w-full flex justify-center items-center cursor-pointer text-lg font-medium transition-all`}
                onClick={() => handleSelect(service)}
              >
                {service.name}
              </div>
            );
          })}
      </div>
      <div className="flex px-60">
        {selectedService && (
          <>
            <div className="w-1/2 px-10">
              <div>
                <img src={selectedService.featuredImage} alt="image" />
              </div>
            </div>

            <div className="flex flex-col justify-center w-1/2 px-10 space-y-10">
              <h2 className="text-3xl font-bold text-primary">
                <Trans text="services.detail.services.title" />
              </h2>
              <p className="">{parse(selectedService.content)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
