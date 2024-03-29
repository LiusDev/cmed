import { Carousel } from "@mantine/carousel";
import type { Project } from "@/types";

const ProjectDetailCarousel = ({ project }: { project: Project }) => {
  const slides = project.images.map((image, index) => (
    <Carousel.Slide key={index} className="w-1/2">
      <img
        src={image}
        alt={`Gallery ${index}`}
        className="w-full h-full object-cover object-center"
      />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      withIndicators
      height={600}
      slideSize="60%"
      slideGap="md"
      loop
      align="center"

      dragFree
    >
      {slides}
    </Carousel>
  );
};

export default ProjectDetailCarousel;
