import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "alternative" | "muted";
    className?: string;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = "primary",
    className = "",
    disabled = false,
}) => {
    const classes = `btn btn-${variant}${className ? " " + className : ""}`;

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

