import { BreadCr, Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import { Category, Document } from "@/types"
import { formatDate, instance } from "@/utils"
import { GetServerSidePropsContext } from "next"
import parse from "html-react-parser"
import React, { useCallback, useMemo, type FC } from "react"
import { DocumentsList } from "@/components/documents"
import Link from "next/link"
import { modals } from "@mantine/modals"
import ContactForm from "@/components/contact/ContactForm"
import { FiBookOpen, FiDownload, FiEye } from "react-icons/fi"
import "./style.module.css"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import PdfViewer from "@/components/pdfViewer/PdfViewer"
import useLang from "@/hooks/useLang"
interface NewsDetailProps {
    document: Document
    relatedDocuments: Document[]
    otherDocuments: Document[]
}

const DocumentsDetail: FC<NewsDetailProps> = ({
    document,
    relatedDocuments,
    otherDocuments,
}) => {
    const { t, currentLanguage } = useLang()

    const breadCrumbsItems = [
        {
            name: t("documents.title"),
            link: "/documents",
        },
        {
            name: document?.category[
                `name${currentLanguage}` as keyof Category
            ] as string,
            link: `/documents?c=${document.category.id}`,
        },
    ]

    const downloadFile = useCallback(() => {
        instance.get(`/documents/${document.id}?download=1`).then(() => {
            window.open(document.document, "_blank")
        })
    }, [document.document])

    const handleDownload = useCallback(
        () =>
            modals.open({
                size: "xl",
                title: t("common.downloadDocumentForm"),
                children: (
                    <ContactForm
                        showContent={false}
                        submitFunction={downloadFile}
                    />
                ),
            }),
        [downloadFile]
    )

    return (
        <MainLayout>
            <div className="container m-auto px-4 my-20">
                <BreadCr items={breadCrumbsItems} />
                <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
                    {
                        document[
                            `name${currentLanguage}` as keyof Document
                        ] as string
                    }
                </h1>
                <button
                    type="button"
                    className="text-sm mb-2 bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300 text-[#fff]"
                    onClick={handleDownload}
                >
                    Download
                </button>
                <div className="flex flex-row gap-3">
                    <p className="text-sm mb-2">
                        {formatDate(document.createdAt, " - ")}
                    </p>
                    <p className="text-sm mb-2">
                        <FiEye className="inline-block" /> {document.view}
                    </p>
                    <p className="text-sm mb-2">
                        <FiDownload className="inline-block" />{" "}
                        {document.download}
                    </p>
                </div>
                <div className="pb-10">
                    {parse(
                        (document[
                            `description${currentLanguage}` as keyof Document
                        ] as string) ?? ""
                    )}
                </div>

                <div className="lg:grid flex flex-col grid-cols-4">
                    <div className="lg:col-span-3 w-full">
                        {/* <object data={document.document} type="application/pdf" width="100%" height="800px"></object> */}
                        <PdfViewer url={document.document} />
                    </div>
                    <div className="ml-5">
                        <h3 className="text-md md:text-xl uppercase my-10 text-center">
                            <Trans text="documents.detail.related" />
                        </h3>
                        <div className="bg-primary/10 p-4 flex flex-col gap-4">
                            {relatedDocuments.length > 0 &&
                                relatedDocuments.map((item) => (
                                    <div
                                        className="p-3 bg-secondary"
                                        key={item.id}
                                    >
                                        <Link href={`/documents/${item.id}`}>
                                            <h4 className="line-clamp-2 font-semibold mb-2">
                                                {item.name}
                                            </h4>
                                        </Link>

                                        <p className="text-sm">
                                            {formatDate(item.createdAt)}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <h2 className="text-xl md:text-3xl uppercase my-10">
                    <Trans text="documents.others" />
                </h2>
                <DocumentsList documents={otherDocuments} />
            </div>
        </MainLayout>
    )
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    if (!context.params || typeof context.params.id !== "string") {
        return {
            notFound: true,
        }
    }
    const { id } = context.params
    const { data: document }: { data: Document } = await instance.get(
        `/documents/${id}`
    )
    const { data }: { data: Document[] } = await instance.get(
        `/documents?c=${document.category.id}&perPage=7`
    )

    const { data: otherDocumentsRaw } =
        await instance.get(`/documents?perPage=5`)

    const relatedDocuments = data
        .filter((item) => item.id !== document.id)
        .slice(0, 6)

    const otherDocuments = otherDocumentsRaw
        .filter((item: Document) => item.id !== document.id)
        .slice(0, 4)

    return {
        props: {
            document,
            relatedDocuments,
            otherDocuments,
        },
    }
}

export default DocumentsDetail
