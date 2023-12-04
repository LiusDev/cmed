import { twMerge } from "tailwind-merge"

type Align = "left" | "center" | "right"

const titleAlign: Record<Align, string> = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
}
const SectionHeader = ({
    title,
    align = "center",
    className = "",
    children,
}: {
    title: string
    align?: Align
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={twMerge(
                `flex flex-col justify-center mb-14 ${titleAlign[align]} ${className}`
            )}
        >
            <div className="text-primary bg-primary-light font-header uppercase font-semibold rounded-sm text-sm px-2 py-1 mb-3">
                {title}
            </div>
            <h2 className="font-semibold text-5xl text-tertiary-dark capitalize text-center">
                {children}
            </h2>
        </div>
    )
}

export default SectionHeader
