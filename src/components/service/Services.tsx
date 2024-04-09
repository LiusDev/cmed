import React, { useCallback, useMemo } from "react";
import type { Service } from "@/types";
import { Trans } from "../common";
import parse from "html-react-parser";
import { useParams, useRouter } from "next/navigation";
import FeaturedImage from "./FeaturedImage";
import { useTranslation } from "react-i18next";
interface ServicesProps {
  services: Service[];
}

const Services = ({ services }: ServicesProps) => {
  const router = useRouter()
  const params = useParams()

  const selectedService = useMemo(() => services.filter(s => s.id.toString() == params.id)[0], [services, params])

  const { i18n } = useTranslation();
  const currentLang = useMemo(() => {
    switch (i18n.language) {
      case "vi": return ""
      default: return i18n.language.toUpperCase()
    }
  }, [i18n.language])

  const handleSelect = useCallback((service: Service) => {
    router.push(`/service/${service.id}`)
  }, [router]);

  return (
    <div className="py-20 bg-[#f4f5f9] z-30 relative">
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
                {service[`name${currentLang}` as keyof typeof selectedService] as string}
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
                <Trans text="services.detail.services.title" />
              </h2>
              <div className="">{parse(selectedService[`content${currentLang}` as keyof typeof selectedService] as string)}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
