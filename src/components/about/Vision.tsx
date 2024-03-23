import { useState } from "react";
import { Button, Trans } from "../common";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
const Vision = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("about.vision.title1"),
      content: t("about.vision.content1"),
      image: "/about/vision/image.png",
    },
    {
      title: t("about.vision.title2"),
      content: t("about.vision.content2"),
      image: "/about/vision/image2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeSlide = () => {
    // Calculate the index of the next item, looping back to the beginning if it's the last item
    const nextIndex = (currentIndex + 1) % data.length;

    // Set the next item as the current content
    setCurrentIndex(nextIndex);
  };

  const content = data[currentIndex];

  return (
    <section id="vision" className={twMerge(`my-20 `)}>
      <div className="grid grid-cols-12">
        <article className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary-dark flex items-start justify-center py-10 md:py-20 lg:py-40 px-4 md:px-20 relative">
          <div className="">
            <h2 className="text-4xl font-semibold capitalize mb-8 md:mb-10 text-primary-dark">
              {content.title}
            </h2>
            <p className="mb-8 md:mb-10">{content.content}</p>
          </div>
          <div className="absolute bottom-0 right-0 flex md:translate-x-1/2">
            <Button
              type="square"
              className="w-12 h-12 p-2"
              onClick={handleChangeSlide}
            >
              <MdArrowBack className="text-2xl" />
            </Button>
            <Button
              type="square"
              variant="secondary"
              className=" w-12 h-12 p-2"
              onClick={handleChangeSlide}
            >
              <MdArrowForward className="text-2xl" />
            </Button>
          </div>
        </article>
        <div className="col-span-12 md:col-span-6 lg:col-span-8 hidden md:block">
          <img
            src={content.image}
            alt={"image"}
            className=" h-[700px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
