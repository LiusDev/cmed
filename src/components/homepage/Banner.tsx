import { Carousel, CarouselSlide, Embla } from "@mantine/carousel";
import { Button, Trans } from "../common";
import { doGet } from "../../utils";
import { Banner as BannerType } from "../../types";
import Autoplay from "embla-carousel-autoplay";
import { ForwardedRef, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";


type SliderRef = {
  next: () => void,
  previous: () => void
}

const Slider = forwardRef(({ banners }: { banners?: BannerType[] }, ref: ForwardedRef<SliderRef>) => {
  const autoplay = useRef(Autoplay({ delay: 4000 }))

  const [emble, setEmble] = useState<Embla | null>(null)

  useImperativeHandle(ref, () => ({
    next: () => emble?.scrollNext(),
    previous: () => emble?.scrollPrev()
  }), [emble])

  if (banners == null) return <></>

  return <div className="absolute bg-primary w-full h-full top-0 left-0 -z-10">
    <Carousel loop getEmblaApi={setEmble} plugins={[autoplay.current]} nextControlProps={{ style: { display: "none" } }} previousControlProps={{ style: { display: "none" } }} className="w-full h-full" styles={{
      viewport: {
        height: "100%"
      },
      container: {
        height: "100%"
      }
    }}>
      {banners.map((b, index) => <CarouselSlide key={index} className="w-full h-full">
        <img title={b.name} src={b.image} className="object-cover w-full h-full" />
      </CarouselSlide>)}
    </Carousel>
  </div>
})

const Buttons = (props: { onNext: () => void, onPrevious: () => void }) => {
  return <div className=" absolute z-10 w-full h-full right-0">
    <div className="container  h-full relative mx-auto box-border">
      <div className="absolute bottom-0 right-0 flex px-4">
        <Button
          type="square"
          className="w-12 h-12 p-2"
          onClick={props.onPrevious}
        >
          <MdArrowBack className="text-2xl" />
        </Button>
        <Button
          type="square"
          variant="secondary"
          className=" w-12 h-12 p-2"
          onClick={props.onNext}
        >
          <MdArrowForward className="text-2xl" />
        </Button>
      </div>
    </div>

  </div>
}

const Banner = ({ banners }: { banners: BannerType[] }) => {
  const sliderRef = useRef<SliderRef>(null)
  const onNext = useCallback(() => {
    sliderRef.current?.next()
  }, [])
  const onPrevious = useCallback(() => {
    sliderRef.current?.previous()
  }, [])
  return (
    <section className="mt-16">
      <div className="bg-no-repeat bg-center bg-cover grid grid-cols-12 relative overflow-hidden">
        <Slider ref={sliderRef} banners={banners} />
        <Buttons onNext={onNext} onPrevious={onPrevious} />
        <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-[#7493BC]/70 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
          <div className="text-secondary">
            <h1 className="text-7xl font-bold mb-12">
              <Trans text="home.banner.title" />
            </h1>
            <p className="mb-12 text-lg font-light">
              <Trans text="home.banner.description" />
            </p>
            <div className="flex gap-4">
              <Button>
                <Trans text="home.banner.buttonContent" />
              </Button>
              <Button variant="secondary">
                <Trans text="home.banner.buttonContent" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
