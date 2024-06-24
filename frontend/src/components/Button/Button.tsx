import classNames from "classnames";

type Props = {
    title: string;
    className?: string;
    variant?: 'light' | 'dark';
    onClick?: (title: any) => void;
    text?: string;
}

export function Button({ title, className, variant = 'dark', onClick, text }: Props) {
    return (
        <button
            className={classNames([
                'bg-evergreen-light md:px-4 md:py-3 p-2  rounded-lg shadow font-medium mt-3 md:text-lg text-sm sm:text-base flex items-center justify-center',
                variant === 'dark' && 'bg-evergreen-light text-white',
                variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light',
                className,
            ])}
            onClick={onClick}
        >
            {text && text.trim() !== '' && <img src={text} alt="Icon" className="w-6 h-6 mr-2" />}
            <span>{title}</span>
        </button>
    )
}

