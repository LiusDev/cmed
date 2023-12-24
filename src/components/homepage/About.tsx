import React from "react";
import { Trans } from "../common";

const About = () => {
    return (
        <section className="overflow-hidden">
            <div className="bg-intro1 h-10 lg:h-40 bg-cover mb-10 lg:mb-0"></div>
            <div className="container m-auto px-4 lg:grid grid-cols-5 lg:gap-16 xl:gap-32">
                <div className="hidden lg:flex col-span-2 bg-primary-dark text-secondary items-center justify-center px-20 pb-32 pt-16 relative before:absolute before:-top-20 before:left-0 before:right-0 before:content-[''] before:w-full before:h-20 before:rounded-t-xl before:bg-primary-dark">
                    <h1 className="lg:text-4xl xl:text-5xl uppercase font-bold leading-relaxed border-l-4 border-secondary pl-8">
                        <Trans text="home.about.title" />
                    </h1>
                </div>
                <h1 className="lg:hidden text-2xl lg:text-4xl uppercase font-bold text-primary flex items-center justify-center lg:justify-end lg:pr-16 mb-10 lg:mb-0">
                    <Trans text="home.about.title" />
                </h1>
                <div className="col-span-3 flex items-center justify-end">
                    <p className="text-justify lg:text-xl leading-relaxed mb-10 lg:mb-0">
                        <Trans text="home.about.content" />
                    </p>
                </div>
            </div>

            <div className="bg-intro aspect-21/9 bg-no-repeat bg-top bg-contain"></div>
        </section>
    );
};

export default About;
