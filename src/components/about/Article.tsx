import { Trans } from "../common"
import { TabBar } from "."

const Article = () => {
    return (
        <div className="py-20 relative h-[1400px]">
            <TabBar />

            <h1 className="py-20 text-4xl font-bold text-center"><Trans text="about.article.title" /></h1>

            <div className="w-[90%] h-[400px] right-0 bottom-28 bg-primary absolute"></div>

            <div className="w-[90%] bg-[#efefef] py-32 px-32 flex justify-end text-2xl absolute">
                <img src="/about/article-image.png" alt="image" className="absolute left-72 top-20" />
                <div className="w-[450px]">
                    <p className="py-5"><Trans text="about.article.article1" /></p>
                    <div className="w-20 border-[1px]"></div>
                    <p className="py-5"><Trans text="about.article.article2" /></p>
                    <div className="w-20 border-[1px]"></div>
                    <p className="py-5"><Trans text="about.article.article3" /></p>
                </div>
            </div>

        </div>
    )
}

export default Article