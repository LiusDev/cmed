import { doGet, instance } from "@/utils";
import { Metadata } from "@/types";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { Trans } from "../common";
import { useEffect, useMemo, useState } from "react";
import CallFloatingButton from "../floatingButtons/CallFloatingButton";
import ChatZaloFloatingButton from "../floatingButtons/ChatZaloFloatingButton";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [metadata, setMetada] = useState<Metadata>()
  useEffect(() => {
    doGet("/metadata").then(res => {
      setMetada(res.data)
    })
  }, [])
  const companyPhone = useMemo(() => metadata?.companyPhone || "0898 099 886", [metadata])

  const { i18n } = useTranslation();
  const currentLang = useMemo(() => {
    switch (i18n.language) {
      case "vi": return ""
      default: return i18n.language.toUpperCase()
    }
  }, [i18n.language])

  return (
    <>
      <CallFloatingButton phone={companyPhone} />
      <ChatZaloFloatingButton userId={"0898099886"} className="bottom-[45px]" />
      <footer className="bg-tertiary flex items-center justify-center text-secondary py-10 lg:py-20">
        <div className="w-full container px-4 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 flex flex-col">
            <ul className="flex flex-col lg:flex-row lg:divide-x divide-tertiary-light mb-12 gap-4 lg:gap-0 order-2 lg:order-1">
              <li className="lg:pr-6">
                <Link href="/about">
                  <Trans text="footer.link.about" />
                </Link>
              </li>
              <li className="lg:px-6">
                <Link href="/recruitment">
                  <Trans text="footer.link.recruitment" />
                </Link>
              </li>
              <li className="lg:px-6">
                <Link href="contact">
                  <Trans text="footer.link.contact" />
                </Link>
              </li>
              <li className="lg:pl-6">
                <Link href="/terms">
                  <Trans text="footer.link.terms" />
                </Link>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8 order-1 lg:order-2 mb-8 lg:mb-0">
              <Link href="#">
                <img
                  src="/logo-bw.webp"
                  alt="logo"
                  className="object-contain h-10"
                />
              </Link>
              <div>
                <h5 className="uppercase mb-4 lg:mb-6">
                  {metadata?.[`companyName${currentLang}` as keyof typeof metadata]}
                </h5>
                <p className="text-sm font-light">
                  {metadata?.[`companyAddress${currentLang}` as keyof typeof metadata]}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <h4 className="lg:text-right text-2xl mb-8 lg:mb-12">
              <a href="tel:0898 099 886">
                <FiPhone className="inline-block mr-2" />
                {companyPhone}
              </a>
            </h4>
            <p className="lg:text-right mb-6">
              <span className="capitalize">
                <Trans text="footer.email" />
              </span>
              : {metadata?.companyEmail || "info@cmed.vn"}
            </p>
            <p className="lg:text-right">
              <span className="capitalize">
                <Trans text="footer.website" />
              </span>
              : {"cmed.vn"}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
