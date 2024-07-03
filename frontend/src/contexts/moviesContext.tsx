import { ReactNode, createContext, useState } from "react";

export type Movie = {
    title: string;
    release: Date;
    duration: number;
    directors: string[];
    categories: string[];
    longDescription: string;
    cast: string[];
    score: number;
    shortDescription: string;
    status: string;
    thumbnailUrl: string;
    _id: string;
};

type PropsContext = {
    movies: Movie[];
    handleSetMovies: (movie: Movie[]) => void;
};

type DateTimeFormatOptions = {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
};



export function formatDateToPt(date: Date): string {
    const options: DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

export const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}min`;
}

export const MoviesContext = createContext({} as PropsContext);

export function MoviesProvider({ children }: { children: ReactNode }) {
    const [movies, setMovies] = useState<Movie[]>([]);
    function handleSetMovies(movie: Movie[]) {
        setMovies(movie);
    }
    return (
        <MoviesContext.Provider
            value={{
                movies,
                handleSetMovies,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
}