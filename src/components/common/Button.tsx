import Link from "next/link";
import { twMerge } from "tailwind-merge";

type Color = "primary" | "secondary";

const buttonColors: Record<Color, string> = {
    primary: "bg-primary text-secondary font-semibold hover:bg-tertiary",
    secondary:
        "bg-secondary text-primary font-semibold hover:bg-secondary-dark",
};

type Variant = "default" | "rounded-full";

const buttonVariants: Record<Variant, string> = {
    default: "rounded-md",
    "rounded-full": "rounded-full",
};

type ButtonSizes = "small" | "medium" | "large";

const buttonSizes: Record<ButtonSizes, string> = {
    small: "px-4 py-2",
    medium: "px-6 py-3",
    large: "px-8 py-4",
};

interface ButtonProps {
    color?: Color;
    variant?: Variant;
    size?: ButtonSizes;
    href?: string;
    newTab?: boolean;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({
    color = "primary",
    variant = "default",
    size = "medium",
    href,
    newTab = false,
    className = "",
    onClick,
    children,
}: ButtonProps) => {
    let target;
    if (newTab) {
        target = "_blank";
    }

    let ComponentType: any = "button";
    let linkProps = {};
    if (href) {
        ComponentType = Link;
        linkProps = { href, target };
    }

    return (
        <ComponentType
            onClick={onClick}
            className={twMerge(
                `${buttonColors[color]} ${buttonVariants[variant]} ${buttonSizes[size]} ${className} flex items-center justify-center shadow-md transition-all`
            )}
            {...linkProps}
        >
            {children}
        </ComponentType>
    );
};

export default Button;
