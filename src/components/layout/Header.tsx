import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
// import SwitchLanguage from "./SwitchLanguage";
import { useTranslation } from "react-i18next";

const headerNav = [
    {
        i18nTitle: "header.home",
        href: "/",
    },
    {
        i18nTitle: "header.about",
        href: "/about",
    },
    {
        i18nTitle: "header.project",
        href: "/project",
    },
    {
        i18nTitle: "header.service",
        href: "/service",
    },
    {
        i18nTitle: "header.document",
        href: "/document",
    },
    {
        i18nTitle: "header.contact",
        href: "/contact",
    },
];

const Logo = () => {
    return (
        <Link href="/">
            <img
                src="logo.png"
                alt="Logo"
                className="h-[50px] max-w-full align-middle object-cover"
            />
        </Link>
    );
};

const NavItem = () => {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <ul className="flex items-center justify-center gap-12">
            {headerNav.map((item) => (
                <li key={item.i18nTitle}>
                    <Link
                        href={item.href}
                        className={` ${
                            router.asPath === item.href
                                ? "text-primary"
                                : "text-tertiary"
                        } hover:text-primary transition-all capitalize font-semibold`}
                    >
                        {t(item.i18nTitle)}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

enum Language {
    VI = "vi",
    EN = "en",
    JP = "jp",
}

const languageLabel: Record<Language, string> = {
    [Language.VI]: "VN",
    [Language.EN]: "ENG",
    [Language.JP]: "JP",
};

const SwitchLanguage = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (language: Language) => {
        if (!language) {
            i18n.changeLanguage(Language.VI);
            return;
        }
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => handleChangeLanguage(Language.VI)}
                className="text-primary text-sm font-medium"
            >
                {languageLabel[Language.VI]}
            </button>
            <button
                onClick={() => handleChangeLanguage(Language.EN)}
                className="text-primary text-sm font-medium"
            >
                {languageLabel[Language.EN]}
            </button>
            <button
                onClick={() => handleChangeLanguage(Language.JP)}
                className="text-primary text-sm font-medium"
            >
                {languageLabel[Language.JP]}
            </button>
        </div>
    );
};

const Header = () => {
    return (
        <header className="w-full flex items-center justify-center fixed top-1 left-0 right-0 z-40">
            <div className="w-full container px-4">
                <div className="bg-secondary flex items-center justify-between px-4 py-2 rounded-md">
                    <Logo />
                    <NavItem />
                    <SwitchLanguage />
                </div>
            </div>
        </header>
    );
};

export default Header;
