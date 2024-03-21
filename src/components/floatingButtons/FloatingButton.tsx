import { PropsWithChildren, useMemo } from "react"
export default function FloatingButton(props: PropsWithChildren<{ className?: string, noFloating?: false }>) {
	const className = useMemo(() => `group p-2 flex items-end w-fit h-fit justify-end z-999999 ${props.noFloating ? "" : "fixed right-0 bottom-0"} ${props.className ?? ""}`, [props.className])
	return <div className={className}>
		{props.children}
	</div>
}