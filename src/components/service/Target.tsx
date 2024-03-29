import { Trans } from "../common";

const Target = () => {
  return (
    <div className="lg:px-40 px-10 bg-[#f4f5f9] py-28 gap-[79px] flex flex-col lg:flex-row justify-center items-center space-y-5">
      <div className="flex-1">
        <h1 className="text-3xl text-primary font-bold">
          <Trans text="services.target.header" />
        </h1>
        <p className="text-justify text-base">
          <Trans text="services.target.content" />
        </p>
      </div>

      <div className="flex-1 relative pt-[5%]">
        <img
          src="/service/target/back-image.webp"
          className="w-4/5 z-20 relative"
          alt=""
        />
        <img
          src="/service/target/back-image.webp"
          className="w-4/5 absolute top-0 right-0 z-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Target;
