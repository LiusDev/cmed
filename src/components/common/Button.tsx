import Link from "next/link"

export enum Color {
    Primary = "bg-primary text-secondary font-semibold hover:bg-tertiary",
    Outline = "bg-secondary text-primary font-semibold hover:bg-primary hover:text-secondary border border-primary",
}

export enum Size {
    Small = "px-4 py-2",
    Medium = "px-6 py-3",
    Large = "px-8 py-4",
}

interface ButtonProps {
    color?: Color
    size?: Size
    href?: string
    newTab?: boolean
    className?: string
    onClick?: () => void
    children: React.ReactNode
}

const Button = ({
    color = Color.Primary,
    size = Size.Medium,
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
                className={`${color} ${size} ${className} rounded-sm transition-all duration-500`}
            >
                {children}
            </Link>
        )
    }
    return (
        <button
            onClick={onClick}
            className={`${color} ${size} ${className} rounded-sm transition-all`}
        >
            {children}
        </button>
    )
}

export default Button
