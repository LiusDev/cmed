import { Trans } from "../common";

const TabBar = () => {
  return (
    <div className=" mx-40 border-b-[1px] border-[#000] md:flex justify-center space-x-20 hidden">
      <div className="py-5 w-80 border-b-[2px] border-primary text-lg font-medium text-center">
        <Trans text="about.article.tabbar.story" />
      </div>
      <div className="py-5 w-80 text-lg font-medium text-center">
        <Trans text="about.article.tabbar.vision" />
      </div>
      <div className="py-5 w-80 text-lg font-medium text-center">
        <Trans text="about.article.tabbar.personnel" />
      </div>
    </div>
  );
};

export default TabBar;
