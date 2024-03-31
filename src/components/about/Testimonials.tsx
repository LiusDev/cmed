import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import classes from "@/styles/testimonial.module.css"
const Testimonials = (props: { author: string, content: string, image: string }) => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      content: props.content,
      author: props.author,
    },

  ];

  return (
    <div className={`bg-cover bg-no-repeat flex justify-center items-center mb-20 overflow-hidden`} style={{
      backgroundImage: `url(${props.image})`,
    }}>
      <Carousel
        classNames={classes}
        withIndicators
        height="100%"
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
              <p className="text-lg md:text-xl p text-justify p-1">{item.content}</p>
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
