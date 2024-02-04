import { PiQuotes } from "react-icons/pi";
import { Trans } from "../common";
import { Carousel } from "@mantine/carousel";
const Testimonials = () => {
  return (
    <div className=" bg-[url('/about/testimonials/bg.png')] bg-no-repeat flex justify-center items-center mb-20 h-[600px] lg:h-[400px]">
      <div className="h-[600px] lg:h-[400px] w-full flex">
        <Carousel withIndicators height="100%" style={{ flex: 1 }}>
          <Carousel.Slide>
            <div className=" py-0 lg:px-60 px-10 w-full h-full md:py-20 bg-primary-dark opacity-60 text-secondary flex flex-col items-center justify-center">
              <p className=" text-xl md:text-2xl">
                <Trans text="about.testimonials.content1" />
              </p>
              <div className="border-[1px] w-20 my-8"></div>
              <div className="text-2xl">
                <Trans text="about.testimonials.author1" />
              </div>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div className="md:py-20 py-0 lg:px-60 px-10 w-full h-full bg-primary-dark opacity-60 text-secondary flex flex-col items-center justify-center">
              <p className="px-10 text-xl md:text-2xl">
                <Trans text="about.testimonials.content2" />
              </p>
              <div className="border-[1px] w-20 my-8"></div>
              <div className="text-xl md:text-2xl">
                <Trans text="about.testimonials.author2" />
              </div>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
