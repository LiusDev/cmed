import useLang from "@/hooks/useLang"
import { useForceUpdate } from "@mantine/hooks"
import Link from "next/link"
import React, { useEffect } from "react"
import { MdArrowForwardIos, MdOutlineHome } from "react-icons/md"
import { twMerge } from "tailwind-merge"

type BreadCrItem = {
    name: string
    link: string
}

interface BreadCrProps {
    items: BreadCrItem[]
    seperator?: React.ReactNode
    className?: string
}

const BreadCr = ({
    items,
    seperator = <MdArrowForwardIos />,
    className = "",
}: BreadCrProps) => {
    return (
        <div className={twMerge(`my-4 flex items-center gap-1 ${className}`)}>
            <Link href="/">
                <MdOutlineHome className="text-tertiary text-xl" />
            </Link>
            {items.map(({ link, name }, index) => (
                <React.Fragment key={index}>
                    <span className="text-sm md:text-base">{seperator}</span>
                    <Link
                        href={link}
                        className={`uppercase text-sm md:text-base font-semibold ${
                            index === items.length - 1
                                ? "text-primary"
                                : "text-tertiary"
                        }`}
                    >
                        {name}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    )
}

export default BreadCr
