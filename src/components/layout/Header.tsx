import { useRouter } from "next/router";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdMenu, MdOutlineArrowBack } from "react-icons/md";
import { twMerge } from "tailwind-merge";

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
    href: "/projects",
  },
  {
    i18nTitle: "header.service",
    href: "/service",
  },
  {
    i18nTitle: "header.document",
    href: "/documents",
  },
  {
    i18nTitle: "header.news",
    href: "/news",
  },
  {
    i18nTitle: "header.contact",
    href: "/contact",
  },
];

const HamburgerMenu = () => {
  const [isShowMenu, setIsShowMenu] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement>(null);
  const closeMenuBtnRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !closeMenuBtnRef.current?.contains(event.target as Node)
      ) {
        setIsShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const { t } = useTranslation();
  const router = useRouter();


  const nav = useMemo(() => headerNav.map((item) => (
    <li key={item.i18nTitle}>
      <Link
        href={item.href}
        className={` ${router.asPath === item.href ? "text-primary" : "text-tertiary"
          } hover:text-primary transition-all capitalize font-semibold text-lg`}
      >
        {t(item.i18nTitle)}
      </Link>
    </li>
  )), [router.asPath])


  return (
    <>
      <button
        onClick={() => setIsShowMenu(true)}
        className="flex items-center justify-center lg:hidden"
      >
        <MdMenu className="text-4xl" />
      </button>
      <aside
        ref={menuRef}
        className={` fixed top-0 left-0 bottom-0 bg-secondary-dark p-6 w-2/3 ${isShowMenu ? "translate-x-0" : "-translate-x-full"
          } lg:-translate-x-full transition-all z-40`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link href="/">
            <img
              src="logo.webp"
              alt="Logo"
              className="h-[36px] max-w-full align-middle object-cover"
            />
          </Link>
          <button ref={closeMenuBtnRef} onClick={() => setIsShowMenu(false)}>
            <MdOutlineArrowBack className="text-4xl" />
          </button>
        </div>
        <ul className="flex flex-col gap-3 mb-10">
          {nav}
        </ul>
        <SwitchLanguage className="justify-start" />
      </aside>
    </>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/logo.webp"
        alt="Logo"
        className="h-[31px] max-w-full align-middle object-cover"
      />
    </Link>
  );
};

const HoverLink = (props: { title: string, href: string, path: string }) => {
  const { t } = useTranslation();
  const [hover, setHover] = useState(false)
  return (
    <div className="w-fit h-fit relative" onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <Link

        href={props.href}
        className={` ${props.path === props.href ? "text-primary" : "text-tertiary"
          } hover:text-primary transition-all uppercase font-semibold relative`}
      >
        {t(props.title)}
      </Link>
      {props.href == "/service" && <HoverMenu open={hover} />}
    </div>
  )
}



const HoverItem = (props: { title: string; href: string }) => {
  return <Link href={props.href}>
    <li className="hover:text-[red]"><p>{props.title}</p></li></Link>
}

const HoverMenu = (props: { open: boolean }) => {
  return (
    <div className="absolute top-full left-0 rounded min-w-full w-auto" style={{ display: props.open ? "unset" : "none" }}>
      <div className="relative min-w-full w-fit pt-[10px]">
        <ul className="w-max flex flex-col gap-[10px]">
          <HoverItem title="Bệnh viện" href="/service/benh-vien" />
          <HoverItem title="Viện dưỡng lão" href="/service/vien-duong-lao" />
          <HoverItem title="Phòng khám đa khoa" href="/service/phong-kham-da-khoa" />
          <HoverItem title="Phòng khám chuyển khoa" href="/service/phong-kham-chuyen-khoa" />
        </ul>
        <div className="bg-secondary w-full h-full top-0 left-[-15px] -z-10 absolute  box-content p-[15px] rounded"></div>
      </div>
    </div>
  )
}

const NavItem = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const nav = useMemo(() => headerNav.map((item, index) => item.href == "/service" ? <HoverLink href={item.href} title={item.i18nTitle} path={router.asPath} key={index} /> : (
    <li key={index}>
      <Link
        href={item.href}
        className={` ${router.asPath === item.href ? "text-primary" : "text-tertiary"
          } hover:text-primary transition-all uppercase font-semibold relative`}
      >
        {t(item.i18nTitle)}
      </Link>
    </li>
  )), [router.asPath])
  return (
    <ul className="hidden lg:flex items-center justify-center gap-12">
      {nav}
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

const SwitchLanguage = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language: Language) => {
    if (!language) {
      i18n.changeLanguage(Language.VI);
      return;
    }
    i18n.changeLanguage(language);
  };

  return (
    <div
      className={twMerge(
        ` flex items-center justify-center gap-4 ${className}`
      )}
    >
      <button
        onClick={() => handleChangeLanguage(Language.VI)}
        className={`${i18n.language === Language.VI && "text-primary font-semibold"
          } text-base lg:text-sm`}
      >
        {languageLabel[Language.VI]}
      </button>
      <button
        onClick={() => handleChangeLanguage(Language.EN)}
        className={`${i18n.language === Language.EN && "text-primary font-semibold"
          }  text-base lg:text-sm`}
      >
        {languageLabel[Language.EN]}
      </button>
      <button
        onClick={() => handleChangeLanguage(Language.JP)}
        className={`${i18n.language === Language.JP && "text-primary font-semibold"
          }  text-base lg:text-sm`}
      >
        {languageLabel[Language.JP]}
      </button>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center fixed top-0 left-0 right-0 bg-secondary h-16 z-40">
      <div className="container px-4 flex items-center justify-between w-full">
        <HamburgerMenu />
        <Logo />
        <NavItem />
        <SwitchLanguage className="hidden lg:flex" />
        <div className="lg:hidden w-5" />
      </div>
    </header>
  );
};

export default Header;
