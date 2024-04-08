import { Trans } from "../common";
import { TabBar } from ".";
import { useMemo } from "react";

const ContentDeco = () => {
  return <>
    <div className="absolute bg-[#EFEFEF] top-0 right-0 w-screen h-[max(calc(100%_-_370px),635px)] -z-[1] max-lg:hidden" />
    <div className="absolute bg-[#1B76BB] bottom-0 left-0 h-[370px] w-screen -z-[2]" />
  </>
}

const Content = (props: { title: string, content: string[] }) => {
  const articles = useMemo(() => [props.title, ...props.content], [props])
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center overflow-hidden lg:pt-[102px]">
      <div className="box-content gap-[30px] lg:pl-[160px] lg:pr-[135px] lg:pb-[107px] lg:pt-[60px] flex flex-col-reverse bg-[#EFEFEF] lg:bg-opacity-0 lg:flex-row justify-between lg:w-[1222px] font-normal relative">
        <ContentDeco />
        <div className="2xl:w-[570px] flex-1">
          <img
            src="/about/article-image.webp"
            className="w-full object-cover"
            alt="image"
          />
        </div>
        <div className="2xl:w-[512px] pt-[40px] flex-1">
          {
            articles.map((a, i) => <>
              <p className={`px-3 lg:px-0 text-justify ${i == 0 ? "text-[24px] line-clamp-[32.69px]" : "text-[17px] line-clamp-[23.15px] text-[black]"}`} key={i}>
                {a}
              </p>
              {i + 1 != articles.length && <div key={i} className="border-[1px] w-[109px] border-[#FFBE88] my-[25px]"></div>}
            </>)
          }
        </div>
      </div>
    </div>
  )
}

const Article = (props: { title: string; content: string[]; articleName: string }) => {
  return (
    <div id="article" className="py-20 pt-[69px] relative w-full">
      <h1 className="md:text-4xl text-3xl font-bold text-center">
        {props.articleName}
      </h1>

      <Content title={props.title} content={props.content} />

    </div>
  );
};

export default Article;
