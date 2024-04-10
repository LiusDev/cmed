import { Carousel } from "@mantine/carousel";
import type { Project } from "@/types";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo, type FC } from "react";

const ProjectDetailCarousel: FC<{ project: Project }> = ({ project }) => {
  const slides = useMemo(() => project.images.map((image, index) => (
    <Carousel.Slide key={index} className="w-1/2">
      <img
        src={image}
        alt={`Gallery ${index}`}
        className="w-full h-full object-cover object-center"
      />
    </Carousel.Slide>
  )), [project])
  const isTabletOrMobile = useMediaQuery("(max-width: 768px)", false)
  return (
    <Carousel
      withIndicators
      height={600}
      {...(isTabletOrMobile ? {} : {
        slideGap: "md",
        slideSize: "60%",
        dragFree: true,
      })}
      loop
      align="center"
    >
      {slides}
    </Carousel>
  );
};

export default ProjectDetailCarousel;
