import { Trans } from "../common";

const Target = () => {
  return (
    <div className="lg:px-40 px-10 bg-[#f4f5f9] py-28 flex flex-col lg:flex-row justify-center items-center space-y-5">
      <div className="lg:w-1/2 md:px-10 space-y-5">
        <h1 className="text-3xl text-primary font-bold">
          <Trans text="services.target.header" />
        </h1>
        <p className="text-justify text-base">
          <Trans text="services.target.content" />
        </p>
      </div>

      <img
        src="/service/target/back-image.webp"
        className="mx-10 lg:w-1/2"
        alt=""
      />
    </div>
  );
};

export default Target;
