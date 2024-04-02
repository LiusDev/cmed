import { useState } from "react";
import Link from "next/link";
const TabBar = (props: { article: string; vision: string; staff: string }) => {
  const [isChosen, setIsChosen] = useState("article");
  const handleChosen = (tabID: string) => {
    setIsChosen(tabID);
  };
  return (
    <div id="article" className="py-20 pb-0 relative w-full">
      <div className="lg:gap-[129px] mx-auto border-b-[0.01px] border-solid border-[#ccc] md:flex justify-center hidden">
        <Link href={"#article"}>
          <div
            onClick={() => handleChosen("article")}
            className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "article" && "border-b-[2px] text-primary"
              }`}
          >
            {props.article}
          </div>
        </Link>
        <Link href={"#vision"}>
          <div
            onClick={() => handleChosen("vision")}
            className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "vision" && "border-b-[2px] text-primary"
              }`}
          >
            {props.vision}
          </div>
        </Link>
        <Link href={"#staff"}>
          <div
            onClick={() => handleChosen("staff")}
            className={`py-5 w-60 border-primary text-lg font-medium text-center ${isChosen === "staff" && "border-b-[2px] text-primary"
              }`}
          >
            {props.staff}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
