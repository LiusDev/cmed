import useSWR from "swr";
import { instance } from "@/utils";
import { Metadata } from "@/types";
import Link from "next/link";
import { FiGlobe, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { Button, Trans } from "../common";
import {
    RiFacebookCircleLine,
    RiInstagramLine,
    RiMailLine,
} from "react-icons/ri";

const fetcher = (url: string) => instance.get(url).then((res) => res.data);

const Footer = () => {
    const { data: metadata }: { data: Metadata } = useSWR("/metadata", fetcher);

    return (
        <footer className="bg-primary-light">
            <div className="container m-auto px-4 py-8 border-b-4 border-primary-dark flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-4">
                <div className="flex flex-col lg:items-center gap-4 px-4 lg:w-3/12">
                    <Link href="/">
                        <img
                            src="logo.png"
                            alt="Logo"
                            className="h-[32px] max-w-full align-middle object-cover"
                        />
                    </Link>
                    <h3 className="text-xl font-semibold text-primary">
                        {metadata?.companyName || "CMED MEDICAL"}
                    </h3>
                    <p className="text-xs mb-4">
                        Cmed Medical là công ty dẫn đầu, tiên phong trong lĩnh
                        vực y tế, hợp tác với nhiều đối tác lớn trong và ngoài
                        nước
                    </p>
                    <ul className="flex-col flex gap-4">
                        <li className="flex items-center gap-2">
                            <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                <FiPhone className="text-secondary" />
                            </div>
                            <p className="text-primary">
                                <span className="mr-1">
                                    <Trans text="common.sitePhoneLabel" />:
                                </span>
                                <a
                                    href={`phone:${metadata?.companyPhone}`}
                                    className="text-sm"
                                >
                                    {metadata?.companyPhone || "1900 0000"}
                                </a>
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                <FiGlobe className="text-secondary" />
                            </div>
                            <p className="text-primary">
                                <span className="mr-1">
                                    <Trans text="common.siteWebLabel" />:
                                </span>
                                <a href="#" className="text-sm">
                                    {"cmed.com.vn"}
                                </a>
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                <FiMail className="text-secondary" />
                            </div>
                            <p className="text-primary">
                                <span className="mr-1">
                                    <Trans text="common.siteEmailLabel" />:
                                </span>
                                <a
                                    href={`mailto:${metadata?.companyEmail}`}
                                    className="text-sm"
                                >
                                    {metadata?.companyEmail || "email@abc.xyz"}
                                </a>
                            </p>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="bg-primary-dark w-6 h-6 px-1 rounded-full flex items-center justify-center">
                                <FiMapPin className="text-secondary" />
                            </div>
                            <p className="text-primary">
                                <span className="mr-1">
                                    <Trans text="common.siteAddressLabel" />:
                                </span>
                                <span className="text-sm text-justify">
                                    {metadata?.companyAddress || "Hanoi"}
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:items-center gap-4 px-4 lg:w-2/12">
                    <h4 className="font-semibold capitalize text-xl text-primary">
                        Công ty
                    </h4>
                    <ul className="flex flex-col gap-4 text-primary">
                        <li>
                            <Link href="#">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link href="#">Tuyển dụng</Link>
                        </li>
                        <li>
                            <Link href="#">Liên hệ</Link>
                        </li>
                        <li>
                            <Link href="#">Điều khoản sử dụng</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:items-center gap-4 px-4 lg:w-2/12">
                    <h4 className="font-semibold capitalize text-xl text-primary">
                        Công ty
                    </h4>
                    <ul className="flex flex-col gap-4 text-primary">
                        <li>
                            <Link href="#">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link href="#">Tuyển dụng</Link>
                        </li>
                        <li>
                            <Link href="#">Liên hệ</Link>
                        </li>
                        <li>
                            <Link href="#">Điều khoản sử dụng</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center gap-4 px-4 lg:w-5/12">
                    <h4 className="font-semibold capitalize text-xl text-primary text-center">
                        Nhận thông báo mới nhất từ chúng tôi
                    </h4>
                    <div className="flex items-center justify-center gap-1 content-stretch">
                        <input
                            type="text"
                            placeholder="E-mail"
                            className="w-full grow rounded-md border-[1.5px] border-primary border-stroke bg-transparent py-1 px-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        <Button className="px-2 py-1 flex items-center justify-center gap-1">
                            <Trans text="common.send" />
                            <FiSend />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container m-auto px-4 py-8">
                <div className="px-4 flex flex-col lg:flex-row items-center justify-between gap-4">
                    <h2 className="uppercase font-semibold text-primary text-center">
                        <Trans text="footer.title" />
                    </h2>
                    <ul className="flex items-center justify-center gap-2">
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
        </footer>
    );
};

export default Footer;
