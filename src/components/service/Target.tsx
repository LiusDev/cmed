import { Trans } from "../common"

const Target = () => {

    return (
        <div className="px-72 bg-primary-light py-28 flex justify-center items-center">
            <div className="w-1/2 px-10  space-y-5">
                <h1 className="text-2xl text-primary font-bold"><Trans text="service.target.header" /></h1>
                <p className="text-justify text-sm"><Trans text="service.target.content" /></p>
            </div>

            <div className="relative w-[600px] h-[500px]">
                <img src="/service/target/back-image.png" className="absolute top-0 right-0 w-3/5" alt="" />
                <img src="/service/target/front-image.png" className="absolute bottom-0 left-0 w-4/5" alt="" />
            </div>
        </div>
    )
}

export default Target