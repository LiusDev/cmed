import { Partner } from "@/types";
import { twMerge } from "tailwind-merge";
import { Carousel } from "@mantine/carousel";
import { Trans } from "@/components/common";
import { memo, useMemo, useRef, type FC } from "react";
import Autoplay from 'embla-carousel-autoplay';
import useLang from "@/hooks/useLang";

interface PartnerProps {
  partners: Partner[];
  className?: string;
}

const Partners: FC<PartnerProps> = ({ partners, className = "" }) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }))
  const { currentLanguage } = useLang()
  const items = useMemo(() => partners.map((partner, index) => <PartnerItem partner={partner} lang={currentLanguage} key={index} />), [partners])

  return (
    <section className={twMerge(`my-20 ${className}`)}>
      <div className="container m-auto w-full">
        <h2 className="text-center text-4xl font-semibold mb-10 ">
          <Trans text="home.partner.title" />
        </h2>
        <Carousel
          height={250}
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap={{ base: 0, sm: "md" }}
          align="start"
          controlSize={40}
          className="flex justify-center items-center"
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {items}
        </Carousel>
      </div>
    </section>
  );
};

const PartnerItem = memo<{ partner: Partner; lang: string }>(({ partner, lang }) => {
  return <Carousel.Slide>
    <div className="w-full h-full flex items-center justify-start">
      <img
        src={partner.image}
        alt={partner[`name${lang}` as keyof typeof partner] as string}
        className="w-full object-contain h-full "
      />
    </div>
  </Carousel.Slide>
})

export default Partners;
