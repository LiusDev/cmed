import Link from "next/link"
import { twMerge } from "tailwind-merge"

type ButtonVariants = "primary" | "outline"

const buttonVariants: Record<ButtonVariants, string> = {
    primary: "bg-primary text-secondary font-semibold hover:bg-tertiary",
    outline:
        "bg-secondary text-primary font-semibold hover:bg-primary hover:text-secondary border border-primary",
}

type ButtonSizes = "small" | "medium" | "large"

const buttonSizes: Record<ButtonSizes, string> = {
    small: "px-4 py-2",
    medium: "px-6 py-3",
    large: "px-8 py-4",
}

interface ButtonProps {
    variant?: ButtonVariants
    size?: ButtonSizes
    href?: string
    newTab?: boolean
    className?: string
    onClick?: () => void
    children: React.ReactNode
}

const Button = ({
    variant = "primary",
    size = "medium",
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
    if (href) {
        return (
            <Link
                href={href}
                target={target}
                className={twMerge(
                    `${buttonVariants[variant]} ${buttonSizes[size]} ${className} rounded-sm transition-all duration-500`
                )}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            onClick={onClick}
            className={twMerge(
                `${buttonVariants[variant]} ${buttonSizes[size]} ${className} rounded-sm transition-all`
            )}
        >
            {children}
        </button>
    )
}

export default Button
