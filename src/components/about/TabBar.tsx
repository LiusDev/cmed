import { useState } from "react";
import { Trans } from "../common";
import Link from "next/link";
const TabBar = () => {
  const [isChosen, setIsChosen] = useState("article");
  const handleChosen = (tabID: string) => {
    setIsChosen(tabID);
  };
  return (
    <div className="w-2/3 mx-auto border-b-[0.01px] border-solid border-[#ccc] md:flex justify-center hidden">
      <Link href={"#article"}>
        <div
          onClick={() => handleChosen("article")}
          className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "article" && "border-b-[2px] text-primary"
            }`}
        >
          <Trans text="about.article.tabbar.story" />
        </div>
      </Link>
      <Link href={"#vision"}>
        <div
          onClick={() => handleChosen("vision")}
          className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "vision" && "border-b-[2px] text-primary"
            }`}
        >
          <Trans text="about.article.tabbar.vision" />
        </div>
      </Link>
      <Link href={"#staff"}>
        <div
          onClick={() => handleChosen("staff")}
          className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "staff" && "border-b-[2px] text-primary"
            }`}
        >
          <Trans text="about.article.tabbar.personnel" />
        </div>
      </Link>
    </div>
  );
};

export default TabBar;
