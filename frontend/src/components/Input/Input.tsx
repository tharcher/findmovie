import { forwardRef } from "react"

type Props = {
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, ...rest }: Props, ref) => {
    return (
        <input
            ref={ref}
            className="outline-none border-2 shadow-lg border-gray-100 rounded-lg w-full p-3 my-2"
            placeholder={placeholder}
            {...rest}
        />
    )
}) 