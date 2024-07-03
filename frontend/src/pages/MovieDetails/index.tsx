import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";
import { Movie, MoviesContext, formatDateToPt, formatDuration } from "../../contexts/moviesContext";
import { useContext, useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";

export function MovieDetails() {
    const { id } = useParams();
    const { movies } = useContext(MoviesContext);
    const [movie, setMovie] = useState<Movie | null>(null);

    let formattedDate = '';
    if (movie?.release) {
        const releaseDate = new Date(movie.release);
        if (!isNaN(releaseDate.getTime())) {
            formattedDate = formatDateToPt(releaseDate);
        }
    }

    useEffect(() => {
        const findMovie = movies.find((movie) => movie._id === id) || null;
        setMovie(findMovie);
    }, [movies, id]);

    return (
        <Container>
            <HeaderTitle />
            <div className="gap-4 grid md:grid-cols-3 grid-cols-1 mt-16 relative">
                <button
                    onClick={() => history.back()}
                    className="absolute inset-y-0 left-0 rounded-l-2xl bg-transparent border border-evergreen-light transition duration-300 ease-in-out hover:bg-blue-100 hover:border-blue-200 flex items-center justify-center p-2 shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <div className="md:col-span-2 grid grid-cols-1 gap-4 md:p-0 pl-12">
                    <div className="bg-white rounded-2xl shadow-md p-6">
                        <h2 className="ml-10 text-5xl font-bold text-evergreen">{movie?.title}</h2>
                        <p className="ml-10 text-xl text-gray-500 font-light py-4">Direção: {movie?.directors.join(', ')}</p>
                        <p className="ml-10 text-lg text-gray-500 font-light py-4">Lançamento em: {formattedDate}</p>
                        <p className="ml-10 text-gray-500 mt-6 text-justify">
                            {movie?.longDescription ? movie.longDescription : movie?.shortDescription}
                        </p>
                    </div>
                </div>
                <div className="md:col-span-1 flex flex-col justify-between md:p-0 pl-12">
                    <img
                        src={movie?.thumbnailUrl}
                        alt=""
                        className="w-full h-fit rounded-lg mb-4"
                    />
                    <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center gap-5">
                        <div className="flex items-center text-sm text-red-600">
                            <FaClock className="mr-1" /> {formatDuration(movie?.duration || 0)}
                        </div>
                        <div className="text-sm text-gray-500">
                            Elenco: {movie?.cast.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Title
                    title="Recomendações com base nesse filme"
                    className="my-6"
                />
                <div className="grid md:grid-cols-4 grid-cols-1 gap-16px gap-y-8">
                    {movies.map(movie => {
                        return (
                            <Card key={movie._id} id={movie._id} movie={movie} />
                        );
                    })}
                </div>
            </div>
        </Container>
    )
}