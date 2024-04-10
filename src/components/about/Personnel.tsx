import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "../common";
import type { Staff } from "@/types";
import parse from "html-react-parser";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
interface PersonnelProps {
  staffs: Staff[];
  className?: string;
}

const Personnel = ({ staffs, className = "" }: PersonnelProps) => {
  staffs.length <= 4 && (staffs = [...staffs, ...staffs]);

  const [t, i18n] = useTranslation();
  const currentLang = useMemo((
  ) => {
    switch (i18n.language) {
      default: return "";
      case "en": return "EN";
      case "jp": return "JP";
    }
  }, [i18n.language])


  const items = useMemo(() => staffs.map((staff, index) => (
    <Carousel.Slide key={index}>
      <div className="h-full w-full mt-5 flex flex-col">
        <img
          src={staff.featuredImage}
          alt={staff[`name${currentLang}` as keyof Staff] as string}
          className="h-96 object-cover object-top"
        />
        <div className="w-full  text-center relative">
          <div className="text-xl font-medium pt-5 mx-auto">{staff[`name${currentLang}` as keyof Staff] as string}</div>
          <div className="text-base italic py-3 mx-auto">
            {staff[`position${currentLang}` as keyof Staff]}
          </div>
          <div className="text-sm space-y-3 mx-3 text-justify max-md:leading-relaxed">
            {parse(staff[`description${currentLang}` as keyof Staff] as string)}
          </div>
        </div>
      </div>
    </Carousel.Slide>
  )), [staffs, currentLang])


  return (
    <section id="staff" className={twMerge(`my-20 min-h-[800px] ${className}`)}>
      <div className="relative container flex flex-col items-center justify-center w-full mx-auto">
        <div className="absolute bg-primary w-full h-[500px] lg:translate-y-40 top-0 lg:top-auto"></div>
        <h2 className="relative text-center text-4xl lg:text-5xl font-semibold mt-10 text-secondary-dark drop-shadow lg:pt-20">
          <Trans text="about.personnel.title" />
        </h2>
        <p className="relative text-lg lg:w-1/4 md:w-1/3 w-3/4 mt-3 mb-3 text-justify text-secondary-dark drop-shadow">
          <Trans text="about.personnel.description" />
        </p>
      </div>
      <div className="container m-auto px-4 ">
        {staffs.length > 0 && (
          <Carousel
            height="100%"
            slideSize={{ base: "100%", sm: "50%", md: "25%" }}
            slideGap={{ base: 0, sm: "md" }}
            loop
            align="start"
            controlSize={40}
          >
            {items}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Personnel;
