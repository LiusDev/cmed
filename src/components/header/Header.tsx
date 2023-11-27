import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import SwitchLanguage from "./SwitchLanguage"
import { useTranslation } from "react-i18next"

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
]

const Logo = () => {
    return (
        <Link href="/">
            <img
                src="logo.png"
                alt="Logo"
                className="h-[50px] max-w-full align-middle"
            />
        </Link>
    )
}

const NavItem = () => {
    const { t } = useTranslation()
    const router = useRouter()

    return (
        <ul className="flex items-center justify-center gap-6">
            {headerNav.map((item) => (
                <li key={item.i18nTitle}>
                    <Link
                        href={item.href}
                        className={` ${
                            router.asPath === item.href
                                ? "text-primary"
                                : "text-tertiary"
                        } hover:text-primary transition-all uppercase font-semibold font-header`}
                    >
                        {t(item.i18nTitle)}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 min-h-[90px] bg-secondary flex items-center justify-center shadow-sm z-50">
                <div className="container w-full m-auto flex items-center justify-center">
                    <div className="px-3 w-full flex items-center justify-between">
                        <Logo />
                        <nav className="flex items-center justify-center gap-6">
                            <NavItem />
                            <span className="w-[1px] h-[20px] bg-tertiary/25" />
                            <SwitchLanguage />
                        </nav>
                    </div>
                </div>
            </header>
            <div className="min-h-[90px]" />
        </>
    )
}

export default Header
