"use client"
import { useCallback, useState } from 'react';
import { DocumentProps, Document, pdfjs, Page } from 'react-pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { PDFDocumentProxy } from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();

const resizeObserverOptions = {};
const maxWidth = 800;
export default (props: DocumentProps) => {

	const [numPages, setNumPages] = useState<number>()
	const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
	const [containerWidth, setContainerWidth] = useState<number>();

	const onResize = useCallback<ResizeObserverCallback>((entries) => {
		const [entry] = entries;

		if (entry) {
			setContainerWidth(entry.contentRect.width);
		}
	}, []);

	useResizeObserver(containerRef, resizeObserverOptions, onResize);

	const onDocumentLoadSuccess = useCallback(({ numPages: nextNumPages }: PDFDocumentProxy) => {
		setNumPages(nextNumPages);
	}, [])

	return <div className="Example__container">
		<div className="Example__container__load">
			<div className="Example__container__document" ref={setContainerRef}>
				<Document {...props} className={"w-full h-screen overflow-scroll bg-tertiary"} onLoadSuccess={onDocumentLoadSuccess} options={{}}>
					{
						Array.from(new Array(numPages), (el, index) => (
							<Page className={"bg-primary"} width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} key={index} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
						))
					}
				</Document>
			</div>
		</div>
	</div>
}