import React, { useCallback, useMemo } from "react";
import type { Service } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";
import { useParams, usePathname, useRouter } from "next/navigation";
import FeaturedImage from "./FeaturedImage";
interface ServicesProps {
  services: Service[];
}

const config = {
  1: "benh-vien",
  2: "vien-duong-lao",
  3: "phong-kham-da-khoa",
  4: "phong-kham-chuyen-khoa"
}

const ConstServices = ({ services }: ServicesProps) => {
  const router = useRouter()
  const params = useParams()
  const pathName = usePathname()

  const selectedService = useMemo(() => {
    const index = Object.keys(config).map(Number).filter(
      i => config[i as keyof typeof config] === pathName.split("/")[2]
    )[0]
    return services[index - 1];
  }, [services, params, pathName])

  console.log(params)
  const handleSelect = useCallback((service: Service) => {
    router.push(`/service/${config[service.id as keyof typeof config]}`)
  }, [router]);

  return (
    <div className="py-20 bg-[#f4f5f9] relative z-20">
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
            <FeaturedImage featuredImage={selectedService.featuredImage} featuredImage2={selectedService.featuredImage2} />

            <div className="flex flex-col justify-center lg:w-1/2 px-10 space-y-10">
              <h2 className="text-3xl font-bold text-primary">
                {selectedService.name}
              </h2>
              <div className="">{parse(selectedService.content)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ConstServices;
