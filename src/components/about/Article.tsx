import { Trans } from "../common";
import { TabBar } from ".";

const Article = () => {
  return (
    <div id="article" className="py-20 relative">
      <TabBar />

      <h1 className="md:py-20 py-10 md:text-4xl text-3xl font-bold text-center">
        <Trans text="about.article.title" />
      </h1>

      <div className="grid grid-cols-12 relative mb-20 lg:mb-60">
        <div className="absolute bg-primary h-80 -bottom-20 lg:-bottom-60 right-0 w-full md:w-[90%]"></div>
        <div className="grid grid-cols-12 col-span-12 md:col-span-11 bg-[#efefef] py-20 relative">
          <img
            src="/about/article-image.png"
            className="col-span-3 absolute top-20 lg:left-60 xl:left-72 w-[400px] hidden lg:block"
            alt="image"
          />
          <div className="col-span-10 col-start-2 lg:col-span-3 lg:col-start-8 text-xl font-medium">
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
      </div>

      {/* <div className="grid grid-cols-12">
        <div className="hidden lg:block col-span-11 h-[400px] right-0 bottom-32 bg-primary col-start-2"></div>
        <div className="B col-span-11 bg-[#efefef] md:py-32 py-5 md:px-32 px-5 flex justify-end md:text-2xl text-xl">
          <img
            src="/about/article-image.png"
            alt="image"
            className="absolute md:left-40 xl:left-72 top-20 hidden lg:block w-80"
          />
          <div className="w-[450px] mx-auto py-20 lg:py-0 lg:mx-0">
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
      </div> */}
    </div>
  );
};

export default Article;
