import { Banner, ContactForm } from "@/components/contact";
import { MainLayout } from "@/components/layout";
import { Metadata } from "@/types";
import { instance } from "@/utils";
import { InferGetStaticPropsType } from "next";

interface ContactProps {
    metadata: InferGetStaticPropsType<typeof getStaticProps>["metadata"];
}

const Contact = ({ metadata }: ContactProps) => {
    return (
        <MainLayout>
            <Banner />
            <ContactForm metadata={metadata} />
        </MainLayout>
    );
};

export const getStaticProps = async () => {
    const metadata: Metadata = (await instance.get("/metadata")).data || {};

    return {
        props: {
            metadata,
        },
        revalidate: 30,
    };
};

export default Contact;
