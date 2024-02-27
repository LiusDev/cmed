import { Trans } from "../common";
import { TabBar } from ".";

const Article = () => {
  return (
    <div id="article" className="py-20 relative w-full">
      <TabBar />
      <h1 className="md:py-20 py-10 md:text-4xl text-3xl font-bold text-center">
        <Trans text="about.article.title" />
      </h1>

      <div className="grid grid-cols-12 relative w-full mb-20 lg:mb-60">
        <div className="hidden lg:block absolute bg-primary h-80 -bottom-20 lg:-bottom-60 right-0 w-full md:w-[90%]"></div>
        <div className="grid grid-cols-12 col-span-12 lg:col-span-11 bg-[#efefef] py-10 md:py-20 relative">
          <img
            src="/about/article-image.png"
            className="hidden lg:block col-start-3 xl:col-start-4 max-w-[400px] absolute top-20"
            alt="image"
          />
          <div className="col-span-12 col-start-2 lg:col-span-4 lg:col-start-8 xl:col-start-8 xl:col-span-3 text-xl font-base">
            <p className="py-5">
              <Trans text="about.article.article1" />
            </p>
            <div className="w-20 border-[1px]"></div>
            <p className="py-5">
              <Trans text="about.article.article2" />
            </p>
            <div className="w-20 border-[1px]"></div>
            <p className="py-5">
              <Trans text="about.article.article3" />
            </p>
          </div>
        </div>
        <img
          src="/about/article-image.png"
          className="w-full col-span-12 lg:hidden"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Article;
