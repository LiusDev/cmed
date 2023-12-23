import React from "react";
import { Trans } from "../common";

const About = () => {
    return (
        <section className="">
            <div className="bg-intro1 h-40"></div>
            <div className="container m-auto px-4 grid grid-cols-5 gap-32">
                <div className="col-span-2 bg-primary-dark text-secondary flex items-center justify-center px-20 pb-32 pt-16 relative before:absolute before:-top-20 before:left-0 before:right-0 before:content-[''] before:w-full before:h-20 before:rounded-t-xl before:bg-primary-dark">
                    <h1 className="text-5xl uppercase font-bold leading-relaxed border-l-4 border-secondary pl-8">
                        <Trans text="home.about.title" />
                    </h1>
                </div>
                <div className="col-span-3 flex items-center justify-end">
                    <p className="text-xl leading-relaxed">
                        <Trans text="home.about.content" />
                    </p>
                </div>
            </div>

            <div className="bg-intro pt-[40%] bg-no-repeat bg-center"></div>
        </section>
    );
};

export default About;
