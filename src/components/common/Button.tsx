import Link from "next/link"
import { twMerge } from "tailwind-merge"

type Variant = "primary" | "secondary" | "outline" | "dark"

const buttonVariants: Record<Variant, string> = {
    primary: "bg-primary-dark text-secondary hover:bg-primary-light",
    secondary: "bg-primary text-secondary hover:bg-primary-light",
    outline:
        "border border-primary text-primary hover:bg-primary hover:text-secondary",
    dark: "bg-tertiary-light text-secondary hover:bg-tertiary",
}

type Type = "default" | "thin" | "square" | "circle"

const buttonTypes: Record<Type, string> = {
    default: "px-8 py-2",
    thin: "px-4 py-2",
    square: "px-4 py-4 rounded-none",
    circle: "px-4 py-4 rounded-full",
}

interface ButtonProps {
    variant?: Variant
    type?: Type
    href?: string
    newTab?: boolean
    className?: string
    onClick?: () => void
    children?: React.ReactNode
}

const Button = ({
    variant = "primary",
    type = "default",
    href,
    newTab = false,
    className = "",
    onClick,
    children,
}: ButtonProps) => {
    let target
    if (newTab) {
        target = "_blank"
    }

    let ComponentType: any = "button"
    let linkProps = {}
    if (href) {
        ComponentType = Link
        linkProps = { href, target }
    }

    return (
        <ComponentType
            onClick={onClick}
            className={twMerge(
                ` ${buttonVariants[variant]} ${buttonTypes[type]} ${className} flex items-center justify-center transition-all`
            )}
            {...linkProps}
        >
            {children}
        </ComponentType>
    )
}

export default Button
