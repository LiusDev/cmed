import React from "react";
import Header from "./Header";
import { Footer } from "./footer";
import Head from "next/head";
import { useTranslation } from "react-i18next";

interface MainLayoutProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

const MainLayout = ({
    title,
    description = "CMED",
    children,
}: MainLayoutProps) => {
    const { t } = useTranslation();
    const siteName = t("common.siteName");

    return (
        <>
            <Head>
                <title>
                    {title ? `${title} | ${siteName}` : `${siteName}`}
                </title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
