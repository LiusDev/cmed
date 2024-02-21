import React from "react"
import { Viewer, Worker } from "@react-pdf-viewer/core"
import "@react-pdf-viewer/core/lib/styles/index.css"
import "@react-pdf-viewer/default-layout/lib/styles/index.css"
import {
    ToolbarSlot,
    TransformToolbarSlot,
    toolbarPlugin,
} from "@react-pdf-viewer/toolbar"

const PdfViewer = ({ url }: { url: string }) => {
    const toolBarPluginInstance = toolbarPlugin()
    const { renderDefaultToolbar, Toolbar } = toolBarPluginInstance
    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => ({
        ...slot,
        Download: () => <></>,
    })

    return (
        <div className="">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
                <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                <Viewer fileUrl={url} plugins={[toolBarPluginInstance]} />
            </Worker>
        </div>
    )
}

export default PdfViewer
