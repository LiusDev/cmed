import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import classes from "@/styles/testimonial.module.css"
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

  if (data.length <= 4) {
    data.push(...data, ...data)
  }

  return (
    <div className=" bg-[url('/about/testimonials/bg.webp')] bg-cover bg-no-repeat flex justify-center items-center mb-20 overflow-hidden">
      <Carousel
        classNames={classes}
        withIndicators
        height="100%"
        loop
        className="bg-[#7493BC]/60"
      >
        {data.map((item, index) => (
          <Carousel.Slide key={index}>
            <div className="mx-auto md:w-3/5  text-center md:py-20 text-secondary flex flex-col items-center justify-center">
              <img
                src="/about/testimonials/Vector.webp"
                alt="quotation"
                className="w-10 h-10 md:w-12 md:h-12 my-10"
              />
              <p className="text-lg md:text-xl">{item.content}</p>
              <div className="border md:w-60 md:my-8"></div>
              <div className="text-2xl py-10">{item.author}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
