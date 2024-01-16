import { MouseEventHandler } from "react";

interface Props {
    text?: string
    onClick: MouseEventHandler
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button
            type="button"
            style={{
                margin: "10px",
            }}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;