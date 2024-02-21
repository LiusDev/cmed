import React, { useState } from "react"
import type { Document } from "@/types"
import Link from "next/link"
import { LoadingOverlay } from "@mantine/core"
interface ItemProps {
    document: Document
}
const DocumentItem = ({ document }: ItemProps) => {
    const [loading, setLoading] = useState(false)
    return (
        <div className="p-5 bg-primary/10 overflow-hidden relative">
            <Link
                href={`/documents/${document.id}`}
                onClick={() => setLoading(true)}
            >
                <LoadingOverlay
                    visible={loading}
                    zIndex={1000}
                    overlayProps={{ radius: "sm", blur: 2 }}
                />
                <img
                    src={document.featuredImage || "/home/about.png"}
                    className="px-3"
                    alt={document.name}
                />
                <h2 className="px-3 pt-5 text-base font-medium line-clamp-2 overflow-hidden">
                    {document.name}
                </h2>
            </Link>
        </div>
    )
}

export default DocumentItem
