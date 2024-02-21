import React from "react"
import type { Document } from "@/types"
import Link from "next/link"
interface ItemProps {
    document: Document
}
const DocumentItem = ({ document }: ItemProps) => {
    return (
        <div className="p-5 bg-[#f3faff] overflow-hidden">
            <Link href={`/documents/${document.id}`}>
                <img
                    src={document.featuredImage || "/home/about.png"}
                    className="px-3"
                    alt={document.name}
                />
                <h2 className="pt-5 text-base font-medium line-clamp-2 overflow-hidden">
                    {document.name}
                </h2>
            </Link>
        </div>
    )
}

export default DocumentItem
