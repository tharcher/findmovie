import { ReactNode, createContext, useState } from "react";

export type Movie = {
    title: string;
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