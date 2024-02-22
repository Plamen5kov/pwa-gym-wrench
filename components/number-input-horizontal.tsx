import { MouseEventHandler, useEffect, useState } from "react"

export type InputChangeEvent = { name: string, value: string | number }

interface Props {
    label?: string,
    name: string,
    initialValue?: number,
    onChange: (target: InputChangeEvent) => void
}
const NumberInputHorizontal = ({ label, name, initialValue, onChange }: Props) => {
    const [input, setInput] = useState(initialValue ?? 0)
    const [inputEventTarget, setInputEventTarget] = useState({} as InputChangeEvent)
    useEffect(() => {
        onChange(inputEventTarget)
    })
    return (
        <div className="text-center flex flex-col items-center">
            <div className="">{label}</div>
            <div className="text-center flex items-center">
                {/* <button className="" onClick={() => { if (input > 0) { setInput(input - 1) } }}>◄</button> */}
                <input
                    type="number" onChange={
                        (e) => {
                            setInputEventTarget(e.target)
                            console.log(e.target)
                            let val = parseInt(e.target.value);
                            setInput(Number(val))
                        }
                    }
                    name={name}
                    value={input}
                    className="text-center w-4/5"
                />
                {/* <button className="block" onClick={() => { if (input < Number.MAX_SAFE_INTEGER) { setInput(input + 1) } }}>►</button> */}
            </div>
        </div>
    )
}
export default NumberInputHorizontal