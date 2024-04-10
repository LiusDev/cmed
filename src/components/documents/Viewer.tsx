"use client"
import { useCallback, useMemo, useState } from 'react';
import { DocumentProps, Document, pdfjs, Page } from 'react-pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';

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

	const pages = useMemo(() => Array.from(new Array(numPages), (_, index) => (
		<Page className={"bg-primary"} width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} key={index} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
	)), [numPages, containerWidth])

	const handleSuccess = useCallback<NonNullable<DocumentProps["onLoadSuccess"]>>((pdf) => {
		setNumPages(pdf.numPages)
	}, [])

	useResizeObserver(containerRef, resizeObserverOptions, onResize);

	return <div className="Example__container">
		<div className="Example__container__load">
			<div className="Example__container__document" ref={setContainerRef}>
				<Document {...props} className={"w-full h-screen overflow-scroll bg-tertiary"} onLoadSuccess={handleSuccess} options={{}}>
					{pages}
				</Document>
			</div>
		</div>
	</div>
}