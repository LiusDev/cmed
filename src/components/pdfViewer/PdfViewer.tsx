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
        Open: () => <></>,
        SwitchTheme: () => <></>,
        EnterFullScreen: () => <></>,
        Print: () => <></>,
    })

    return (
        <div className="">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div className="h-[calc(100vh-150px)]">
                    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                    <Viewer enableSmoothScroll fileUrl={url} plugins={[toolBarPluginInstance]} />
                </div>
            </Worker>
        </div>
    )
}

export default PdfViewer
