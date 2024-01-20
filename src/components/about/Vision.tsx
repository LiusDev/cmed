import { Button, Trans } from "../common"
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import { twMerge } from "tailwind-merge"


const Vision = () => {
    return (
        <section className={twMerge(`my-20`)}>
            <div className="grid grid-cols-12">
                <article className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary-dark flex items-center justify-center py-10 md:py-20 px-4 md:px-20 relative">
                    <div>
                        <h2 className="text-4xl font-semibold capitalize mb-8 md:mb-10">
                            <Trans text="about.vision.title" />
                        </h2>
                        <p className="mb-8 md:mb-10">
                            <Trans text="about.vision.content" />
                        </p>
                    </div>
                    <div className="absolute bottom-0 right-0 flex md:translate-x-1/2">
                        <Button
                            type="square"
                            className="w-12 h-12 p-2"
                            // onClick={() => handleChangeProject("prev")}
                        >
                            <MdArrowBack className="text-2xl" />
                        </Button>
                        <Button
                            type="square"
                            variant="secondary"
                            className=" w-12 h-12 p-2"
                            // onClick={() => handleChangeProject("next")}
                        >
                            <MdArrowForward className="text-2xl" />
                        </Button>
                    </div>
                </article>
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <img
                        src={"/about/vision/image.png"}
                        alt={"image"}
                        className="h-full object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default Vision
