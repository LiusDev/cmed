import { BreadCr, Button, Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import { Document } from "@/types"
import { formatDate, instance } from "@/utils"
import { GetServerSidePropsContext } from "next"
import parse from "html-react-parser"
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react"
import { useTranslation } from "react-i18next"
import { DocumentItem, DocumentsList } from "@/components/documents"
import Link from "next/link"
import { modals } from "@mantine/modals"
import ContactForm from "@/components/contact/ContactForm"
import dynamic from "next/dynamic"
import { FiBookOpen, FiDownload, FiEye, FiPaperclip } from "react-icons/fi"
import { MdFirstPage, MdPages } from "react-icons/md"
const Viewer = dynamic(() => import("@/components/documents/Viewer"), { ssr: false })
import "./style.module.css"


interface NewsDetailProps {
    document: Document
    relatedDocuments: Document[]
    otherDocuments: Document[]
}

const DocumentsDetail = ({
    document,
    relatedDocuments,
    otherDocuments,
}: NewsDetailProps) => {
    const { t } = useTranslation()

    const breadCrumbsItems = useMemo(() => [
        {
            name: t("documents.title"),
            link: "/documents",
        },
        {
            name: document.category.name,
            link: `/documents?c=${document.category.id}`,
        },
    ], [document])

    const downloadFile = useCallback(() => {
        window.open(document.document, "_blank")
    }, [document.document])

    const handleDownload = useCallback(() =>
        modals.open({
            size: "xl",
            title: t("common.downloadDocumentForm"),
            children: (
                <ContactForm
                    showContent={false}
                    submitFunction={downloadFile}
                />
            ),
        }), [downloadFile])

    return (
        <MainLayout>
            <div className="container m-auto px-4 my-20">
                <BreadCr items={breadCrumbsItems} />
                <h1 className="text-2xl md:text-4xl font-bold uppercase mb-4">
                    {document.name}
                </h1>
                <div className="flex flex-row gap-3">
                    <p className="text-sm mb-2">
                        {formatDate(document.createdAt, " - ")}
                    </p>
                    <p className="text-sm mb-2">
                        <FiEye className="inline-block" /> {document.view}
                    </p>
                    <p className="text-sm mb-2">
                        <FiDownload className="inline-block" /> {document.download}
                    </p>
                    <p className="text-sm mb-2">
                        <FiBookOpen className="inline-block" /> {document.download} trang
                    </p>
                </div>
                <div className="pb-10">{parse(document.description)}</div>

                <div className="lg:grid flex flex-col grid-cols-4">
                    <div className="lg:col-span-3 w-full">
                        <object data={document.document} type="application/pdf" width="100%" height="800px"></object>
                        {/* <Viewer file={document.document} /> */}
                    </div>
                    <div className="ml-5">
                        <h3 className="text-md md:text-xl uppercase my-10 text-center">
                            <Trans text="documents.detail.related" />
                        </h3>
                        <div className="bg-primary/10 p-4 flex flex-col gap-4">
                            {relatedDocuments.length > 0 &&
                                relatedDocuments.map((item) => (
                                    <div className="p-3 bg-secondary" key={item.id}>
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
