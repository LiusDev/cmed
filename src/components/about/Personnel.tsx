import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "../common";
import type { Staff } from "@/types";
import parse from "html-react-parser";
interface PersonnelProps {
  staffs: Staff[];
  className?: string;
}

const Personnel = ({ staffs, className = "" }: PersonnelProps) => {
  staffs.length <= 4 && (staffs = [...staffs, ...staffs]);

  return (
    <section id="staff" className={twMerge(`my-20 ${className}`)}>
      <div className="relative container flex flex-col items-center justify-center w-full mx-auto">
        <div className="absolute bg-[url('/about/personnel/bg.png')] w-full h-[500px] translate-y-40"></div>
        <h2 className="relative text-center text-4xl font-semibold mt-10 text-secondary-dark drop-shadow">
          <Trans text="about.personnel.title" />
        </h2>
        <p className="relative text-center text-sm lg:w-1/4 md:w-1/3 w-1/2 mt-3 mb-3 text-secondary-dark drop-shadow">
          <Trans text="about.personnel.description" />
        </p>
      </div>
      <div className="container m-auto px-4">
        {staffs.length > 0 && (
          <Carousel
            height={600}
            slideSize={{ base: "100%", sm: "50%", md: "25%" }}
            slideGap={{ base: 0, sm: "md" }}
            loop
            align="start"
            controlSize={40}
          >
            {staffs.map((staff, index) => (
              <Carousel.Slide key={index}>
                <div className="h-full w-full mt-5 flex flex-col">
                  <img
                    src={staff.featuredImage}
                    alt=""
                    className="h-96 object-cover object-top"
                  />
                  <div className="w-full h-20 text-center relative">
                    <div className="text-xl font-medium pt-5 mx-auto">{staff.name}</div>
                    <div className="text-base italic py-3 mx-auto">
                      {staff.position}
                    </div>
                    <div className="text-start text-sm space-y-3 mx-3">
                      {parse(staff.description)}
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Personnel;
