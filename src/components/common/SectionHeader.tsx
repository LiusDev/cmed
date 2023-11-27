enum Align {
    Left = "items-start",
    Center = "items-center",
    Right = "items-end",
}

const SectionHeader = ({
    title,
    align = Align.Center,
    children,
}: {
    title: string
    align?: Align
    children: React.ReactNode
}) => {
    return (
        <div className={`flex flex-col justify-center ${align} `}>
            <div className="text-primary bg-primary-light font-header uppercase font-semibold rounded-sm text-sm px-2 py-1 mb-3">
                {title}
            </div>
            <h2 className="font-semibold text-5xl text-tertiary-dark mb-14 capitalize text-center">
                {children}
            </h2>
        </div>
    )
}

export default SectionHeader
