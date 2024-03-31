import React, { use, useCallback, useMemo, useState } from "react";
import type { Service } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  const router = useRouter()
  const params = useParams()

  const selectedService = useMemo(() => services.filter(s => s.id.toString() == params.id)[0], [services, params])

  console.log(params)
  const handleSelect = useCallback((service: Service) => {
    router.push(`/service/${service.id}`)
  }, [router]);

  return (
    <div className="py-20 bg-[#f4f5f9]">
      <div className="h-40 md:w-3/5 w-full bg-[#fff] shadow-custom mx-auto -translate-y-40 flex">
        {services.length > 0 &&
          services.map((service, index) => {
            return (
              <div
                key={index}
                className={`${selectedService === service
                  ? "bg-primary text-secondary-dark scale-110"
                  : "bg-[#fff]"
                  } w-full flex flex-col justify-center items-center cursor-pointer text-base font-medium transition-all`}
                onClick={() => handleSelect(service)}
              >
                <img src={service.logo} className="w-10 h-10 mb-2" alt="icon" />
                {service.name}
              </div>
            );
          })}
      </div>
      <div className="flex flex-col lg:flex-row xl:px-60 lg:min-h-[500px]">
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
