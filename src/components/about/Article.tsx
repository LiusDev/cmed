import { Trans } from "../common";
import { TabBar } from ".";

const Article = () => {
  return (
    <div className="py-20 relative h-[800px] md:h-[1000px] lg:h-[1300px]">
      <TabBar />

      <h1 className="md:py-20 py-10 md:text-4xl text-3xl font-bold text-center">
        <Trans text="about.article.title" />
      </h1>

      <div className="hidden lg:block w-[90%] h-[400px] right-0 bottom-32 bg-primary absolute"></div>

      <div className="lg:w-[90%] w-full bg-[#efefef] md:py-32 py-5 md:px-32 px-5 flex justify-end md:text-2xl text-xl absolute">
        <img
          src="/about/article-image.png"
          alt="image"
          className="md:absolute md:left-40 xl:left-72 top-20 hidden lg:block w-80"
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
    </div>
  );
};

export default Article;
