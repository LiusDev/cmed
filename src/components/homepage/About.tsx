import { twMerge } from "tailwind-merge";
import { Trans } from "../common";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section className={twMerge(`my-20 ${className}`)}>
      <div className="relative grid grid-cols-12">
        <div className="flex flex-col xl:col-span-6 lg:col-span-8 md:col-span-10 col-span-12 z-10 min-h-[400px]">
          <div className="md:h-1/2 relative px-5">
            <h2 className="md:absolute xl:w-1/2 lg:w-2/3  right-12 top-20 capitalize text-4xl md:text-5xl lg:text-6xl leading-normal md:border-b-2 border-tertiary pb-4 font-semibold text-center md:text-left">
              <Trans text="home.about.title" />
            </h2>
          </div>
          <div className="bg-secondary-dark md:h-1/2 flex justify-center items-center p-10 lg:p-20 lg:text-base xl:text-xl text-sm ">
            <Trans text="home.about.description" />
          </div>
        </div>
        <div className="hidden lg:block w-full xl:col-span-4 lg:col-span-3 xl:col-start-7 lg:col-start-9 z-10 min-h-[600px]">
          <img src="/home/about.png" alt="home/about image" className="h-full object-cover object-center" />
        </div>
        <div className="absolute hidden md:block bg-primary w-3/5 h-3/5 z-5 right-0"></div>
      </div>
    </section>
  );
};

export default About;
