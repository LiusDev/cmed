import { Trans } from "../common";
import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      content: t("about.testimonials.content1"),
      author: t("about.testimonials.author1"),
    },
    {
      id: 2,
      content: t("about.testimonials.content2"),
      author: t("about.testimonials.author2"),
    },
  ];

  return (
    <div className=" bg-[url('/about/testimonials/bg.png')] bg-cover bg-no-repeat flex justify-center items-center mb-20 h-full">
      <div className="h-full w-full flex justify-center bg-[#7493BC]/60 ">
        <Carousel
          withIndicators
          height="100%"
          // slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          loop
        >
          {data.map((item) => (
            <Carousel.Slide>
              <div className="mx-auto w-full md:w-3/5 text-center h-full md:py-20 text-secondary flex flex-col items-center justify-center">
                <img
                  src="/about/testimonials/Vector.png"
                  alt="quotation"
                  className="w-10 h-10 md:w-12 md:h-12 my-10"
                />
                <p className="text-lg md:text-xl px-10">{item.content}</p>
                <div className="border md:w-60 md:my-8"></div>
                <div className="text-2xl py-10">{item.author}</div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
