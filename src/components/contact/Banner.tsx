import React from "react";
import { Trans } from "../common";
import Link from "next/link";
import {
    RiFacebookCircleLine,
    RiInstagramLine,
    RiMailLine,
} from "react-icons/ri";

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-[#339cd0] to-[#000d6e] pt-32 pb-20 lg:py-40">
            <div className="m-auto container px-4 grid grid-cols-12">
                <div className="col-span-12 lg:col-span-5 flex flex-col items-center justify-center gap-4 px-12">
                    <h1 className="text-secondary text-2xl lg:text-4xl font-bold capitalize text-center">
                        <Trans text="contact.title" />
                    </h1>
                    <p className="text-secondary text-center text-sm lg:text-base">
                        <Trans text="contact.description" />
                    </p>
                    <ul className="flex items-center justify-center gap-4 lg:gap-2">
                        <li>
                            <Link href="#">
                                <div className="bg-primary-dark w-8 h-8 rounded-full flex items-center justify-center">
                                    <RiFacebookCircleLine className="text-secondary text-xl" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="bg-primary-dark w-8 h-8 rounded-full flex items-center justify-center">
                                    <RiInstagramLine className="text-secondary text-xl" />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <div className="bg-primary-dark w-8 h-8 rounded-full flex items-center justify-center">
                                    <RiMailLine className="text-secondary text-xl" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Banner;
