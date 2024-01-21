import { Button, Trans } from "../common"

const Article = () => {
    return (
        <div className="w-[400px] min-h-[500px] absolute right-80 top-80 bg-secondary drop-shadow-lg rounded-tl-[75px] rounded-br-[75px] rounded-bl-[20px] rounded-tr-[20px]">
            
            <div className=" rounded-full p-5 bg-secondary w-52 h-52 flex justify-center items-center shadow-lg absolute -top-24 mx-auto left-0 right-0">
                <img src="/service/article/article.png" alt="image" />
            </div>

            <div className="mt-40 px-10 text-center space-y-5">
                <h2 className="text-primary font-bold text-xl"><Trans text="services.article.header" /></h2>
                <p className="text-base"><Trans text="services.article.content" /></p>
            </div>

             <Button variant="outline" className="mx-auto my-12 w-52" href="/service/detail"><Trans text="services.article.buttonContent" /></Button>

        </div>
    )
}

export default Article