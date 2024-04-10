import type { FC } from "react";
import { Button, Trans } from "../common";


interface BannerProps {
  title?: string
  description?: string | false
  hiddenButton?: true
}

const Banner: FC<BannerProps> = (props) => {
  return (
    <section className="mt-16">
      <div className="bg-[url('/home/home-banner.webp')] bg-no-repeat bg-center bg-cover min-h-[800px] overflow-hidden">
        <div className="container w-screen mx-auto px-4 text-secondary">
          <div id="main" className="flex flex-col w-fit lg:relative">
            <div className="absolute bg-[#7493BCB2]/50 w-full h-full lg:w-screen lg:h-screen right-0 top-0 z-10" />
            <h1 className="text-[100px] leading-[136.2px] font-bold mb-12 min-h-[200px] pt-[187px] pr-[105px] z-20  block">
              {
                props.title ?? <Trans text="services.banner.title" />
              }
            </h1>
            <p className=" font-normal text-[20px] text-justify relative max-w-[391px] text-wrap break-words h-auto leading-[27.24px] line-clamp-5 z-10">
              {
                !props.description ? <></> : (props.description ?? <Trans text="services.banner.description" />)
              }
            </p>
            <p className="mb-12 text-lg font-light max-w-[50%] z-10  block">

            </p>
            {!props.title && props.hiddenButton == null &&
              <div className="flex gap-4">
                <Button
                  className="col-span-2"
                  variant="secondary"
                  href="/service/detail"
                >
                  <Trans text="services.banner.buttonContent" />
                </Button>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
