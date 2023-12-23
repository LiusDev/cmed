import { twMerge } from "tailwind-merge";

const Card = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={twMerge(
                ` bg-secondary shadow-md rounded-md ${className}`
            )}
        >
            {children}
        </div>
    );
};

export default Card;
