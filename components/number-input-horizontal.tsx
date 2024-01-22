import { useEffect, useState } from "react"

interface Props {
    label?: string,
    onChange: (input: Number) => void
}
const NumberInputHorizontal = ({ label, onChange }: Props) => {
    const [input, setInput] = useState(0)
    useEffect(() => {
        onChange(input)
    })
    return (
        <div className="text-center flex flex-col items-center">
            <div className="">{label}</div>
            <div className="text-center flex items-center">
                <button className="" onClick={() => { if (input > 0) { setInput(input - 1) } }}>◄</button>
                <input
                    type="number" onChange={
                        (e) => {
                            let val = parseInt(e.target.value);
                            setInput(Number(val))
                        }
                    }
                    value={input}
                    className="text-center w-4/5"
                />
                <button className="block" onClick={() => { if (input < Number.MAX_SAFE_INTEGER) { setInput(input + 1) } }}>►</button>
            </div>
        </div>
    )
}
export default NumberInputHorizontal