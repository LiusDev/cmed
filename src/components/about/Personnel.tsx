import { Partner } from "@/types";
import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "../common";
import type { Staff } from "@/types";

// const staff = [
//   {
//     id: 4,
//     name: "Tang Anh Tuan",
//     position: "CEO - Founder",
//   },
//   {
//     id: 4,
//     name: "Tang Anh Tuan",
//     position: "CEO - Founder",
//   },
//   {
//     id: 4,
//     name: "Tang Anh Tuan",
//     position: "CEO - Founder",
//   },
//   {
//     id: 4,
//     name: "Tang Anh Tuan",
//     position: "CEO - Founder",
//   },
//   {
//     id: 4,
//     name: "Tang Anh Tuan",
//     position: "CEO - Founder",
//   },
// ];

interface PersonnelProps {
  staffs: Staff[];
  className?: string;
}

const Personnel = ({ staffs, className = "" }: PersonnelProps) => {
  return (
    <section className={twMerge(`my-20 ${className}`)}>
      <img
        src="/about/personnel/bg.png"
        className="absolute w-full lg:w-4/5 mx-auto left-0 right-0"
        alt="image"
      />
      <div className="container m-auto px-4">
        <h2 className="absolute text-center text-4xl font-semibold mx-auto left-0 right-0 mt-20 text-secondary">
          <Trans text="about.personnel.title" />
        </h2>
        {staffs.length && (
          <Carousel
            withIndicators
            height={800}
            slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
            slideGap={{ base: 0, sm: "md" }}
            loop
            align="start"
            controlSize={40}
          >
            {staffs.map((staff) => (
              <Carousel.Slide key={staff.id}>
                <div className="h-full w-full mt-52">
                  <img
                    src={staff.featuredImage}
                    alt={staff.name}
                    className="object-contain mx-auto"
                  />
                  <div className="mx-auto h-20 text-center px-10">
                    <div className="text-xl font-medium pt-5">{staff.name}</div>
                    <div className="text-base italic py-3">
                      {staff.position}
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
