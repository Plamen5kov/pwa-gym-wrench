import { MouseEventHandler } from "react";

interface Props {
    text?: string
    onClick: MouseEventHandler,
}

const Button = ({ text, onClick }: Props) => {
    return (
        <button
            type="button"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;