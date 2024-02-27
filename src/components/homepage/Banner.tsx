import { Button, Trans } from "../common";

const Banner = () => {
  return (
    <section className="mt-16">
      <div className="bg-[url('/home/home-banner.png')] bg-no-repeat bg-center bg-cover grid grid-cols-12">
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
