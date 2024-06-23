import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
}

export function Typewriter({ text, speed = 200 }: Props) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        let interval: NodeJS.Timeout | null = null;

        const typeText = () => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.substring(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        };

        interval = setInterval(typeText, speed);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [text, speed]);

    return <span>{displayedText}</span>;
}