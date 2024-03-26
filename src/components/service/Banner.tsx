import { Button, Trans } from "../common";


interface BannerProps {
  title?: string
  description?: string
}

const Banner = (props: BannerProps) => {
  return (
    <section className="mt-16">
      <div className="bg-[url('/home/home-banner.png')] bg-no-repeat bg-center bg-cover grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-primary/50 flex items-center justify-center py-40 px-4 lg:px-20 transition-all">
          <div className="text-secondary">
            <h1 className="text-7xl font-bold mb-12">
              {
                props.title ?? <Trans text="services.banner.title" />
              }
            </h1>
            <p className="mb-12 text-lg font-light">
              {
                props.description ?? <Trans text="services.banner.description" />
              }
            </p>
            <div className="flex gap-4">
              <Button
                className="col-span-2"
                variant="secondary"
                href="/service/detail"
              >
                <Trans text="services.banner.buttonContent" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
