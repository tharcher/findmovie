import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { Movie } from "../../contexts/moviesContext";

type Props = {
    id: string;
    movie: Movie;
}

export function Card({ id, movie }: Props) {
    console.log("Card - movie: ", movie);

    const navigate = useNavigate()
    const handleSelectedMovie = useCallback(() => {
        navigate(`/${id}`);
    }, [id, navigate])
    return (
        <div className="p-2 gap-3 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg">
            <div className="col-span-1">
                <img
                    src={movie?.thumbnailUrl}
                    alt=""
                    className="object-center w-full h-full rounded-lg"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <div>
                    <p className="font-bold text-xl text-evergreen">{movie.title}</p>
                    <p className="font-light text-sm text-gray-500 mb-2">Direção: {movie?.directors.join(', ')}</p>
                    <Tag title={movie?.categories.join(', ')}className="mb-3 text-sm" />
                    {movie.shortDescription && (
                        <p className="text-justify text-sm">
                            <strong>Sinopse: </strong>
                            {movie.shortDescription}
                        </p>
                    )}
                </div>
                <div className="flex justify-center">
                    <Button
                        title="Ver mais"
                        variant="light"
                        className="w-full md:py-1 py-0.5 bg-transparent border rounded-md transition duration-300 ease-in-out hover:bg-blue-100 hover:border-blue-200 hover:text-blue-400 md:text-sm"
                        onClick={handleSelectedMovie}
                    />
                </div>
            </div>
        </div>
    )
}