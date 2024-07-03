import classNames from "classnames";
import { useCallback } from "react"

type Props = {
    title: string;
    className?: string;
}

export function Tag({title, className}: Props) {
    const randomColors = useCallback(()=> {
        const hue = Math.floor(Math.random() * 360);
        const light = `hsl(${hue}, 100%, 95%)`;
        const dark = `hsl(${hue}, 100%, 20%)`;
        return { light, dark }
    },[])

    return (
        <p 
            style={{
                backgroundColor: randomColors().light, 
                color: randomColors().dark
            }}
            className={classNames([
                'rounded-t bg-opacity-50ext-center w-fit px-3 py-1',
                className,
            ])}
        >{title}
        </p>
    )
}