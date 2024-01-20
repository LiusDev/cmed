import { PiQuotes } from "react-icons/pi";
import { Trans } from "../common";
const Testimonials = () => {
    return (
        <div className=" bg-[url('/about/testimonials/bg.png')] bg-no-repeat flex justify-center items-center bg-primary opacity-90">
            <div className="py-20 w-full h-full bg-primary-dark opacity-60 text-secondary flex flex-col items-center justify-center">
                <PiQuotes className="text-5xl " />
                <p className="w-[800px] text-2xl pt-10"><Trans text="about.testimonials.content" /></p>
                <div className="border-[1px] w-80 my-8"></div>
                <div className="text-2xl"><Trans text="about.testimonials.author" /></div>
            </div>
        </div>
    )
}

export default Testimonials