import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { Movie, formatDuration } from "../../contexts/moviesContext";
import { FaClock } from 'react-icons/fa';

type Props = {
    id: string;
    movie: Movie;
}

export function Card({ id, movie }: Props) {
    console.log("Card - movie: ", movie);

    const navigate = useNavigate();
    const handleSelectedMovie = useCallback(() => {
        navigate(`/${id}`);
    }, [id, navigate]);

    return (
        <div className="relative group p-1 gap-3 grid grid-cols-3 shadow-lg rounded-lg border border-gray-100 max-w-lg">
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
                    <Tag title={movie?.categories.join(', ')} className="mb-3 text-sm" />
                    {movie.shortDescription && (
                        <p className="text-justify text-sm overflow-y-auto h-full">
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
            <div className="absolute top-0 -left-48 w-44 p-2 bg-gray-500 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start space-y-2 z-10">
                <div className="flex items-center text-white text-sm">
                    <FaClock className="mr-1" /> {formatDuration(movie?.duration || 0)}
                </div>
                <div className="text-white text-xs">
                    <strong>Elenco: </strong>
                    {movie.cast.join(', ')}
                </div>
            </div>
        </div>
    );
}
