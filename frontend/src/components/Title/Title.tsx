import classNames from "classnames";

type Props = {
    title: string;
    className?: string;
}

export function Title({title, className}: Props) {
    return(
        <div className={classNames([
            "md:text-4xl text-2xl border-b-2 pb-2 border-b-evergreen-light w-fit font-bold text-evergreen",
            className
        ])}>
            {title}
        </div>
    )
}