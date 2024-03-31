import { Button, Trans } from "../common";

const Banner = (props: { title: string, subtitle:string, buttonContent1: string, buttonContent2: string }) => {
  return (
    <section className="mt-16">
      <div className="bg-[url('/about/about-banner.webp')] bg-no-repeat bg-center bg-cover grid grid-cols-12 relative">
        <div className="lg:pl-[173px] lg:!pr-[116px] col-span-12 md:col-span-12 lg:col-span-6 bg-[#7493BC]/60 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
          <div className="text-secondary flex flex-col justify-center space-y-10">
            <h1 className="font-bold text-[100px] line-clamp-[136.2px]">
              {/* <Trans text="terms.banner.title" /> */}
              {props.title}
            </h1>
            <div className="flex flex-row gap-[36px]">
              <div>
                <div className="border-[0.5px] w-[190px] h-[1px] mt-[1.1rem]" />
              </div>
              <p className="text-lg font-light inline-block">
                {/* <Trans text="terms.banner.description" /> */}
                {props.subtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full absolute space-x-2 bottom-10 justify-center md:justify-end md:right-20">
          <Button className="w-44 uppercase">
            {/* <Trans text="terms.banner.buttonContent1" /> */}
            {props.buttonContent1}
          </Button>
          <Button className="w-44 uppercase">
            {/* <Trans text="terms.banner.buttonContent2" /> */}
            {props.buttonContent2}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
