import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "@/components/common";
import type { Staff } from "@/types";
import parse from "html-react-parser";
import { useMemo, type FC } from "react";
import useLang from "@/hooks/useLang";
interface PersonnelProps {
  staffs: Staff[];
  className?: string;
}

const Personnel = ({ staffs, className = "" }: PersonnelProps) => {
  staffs.length <= 4 && (staffs = [...staffs, ...staffs]);

  const { currentLanguage } = useLang()


  const items = useMemo(() => staffs.map((staff, index) => <PersonnelItem key={index} lang={currentLanguage} staff={staff} />), [staffs, currentLanguage])


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


const PersonnelItem: FC<{ staff: Staff; lang: string }> = ({ staff, lang }) => <Carousel.Slide>
  <div className="h-full w-full mt-5 flex flex-col">
    <img
      src={staff.featuredImage}
      alt={staff[`name${lang}` as keyof Staff] as string}
      className="h-96 object-cover object-top"
    />
    <div className="w-full  text-center relative">
      <div className="text-xl font-medium pt-5 mx-auto">{staff[`name${lang}` as keyof Staff] as string}</div>
      <div className="text-base italic py-3 mx-auto">
        {staff[`position${lang}` as keyof Staff]}
      </div>
      <div className="text-sm space-y-3 mx-3 text-justify max-md:leading-relaxed">
        {parse(staff[`description${lang}` as keyof Staff] as string)}
      </div>
    </div>
  </div>
</Carousel.Slide>

export default Personnel;
