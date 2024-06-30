import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";
import { Movie, MoviesContext } from "../../contexts/moviesContext";
import { useContext, useEffect, useState } from "react";

export function MovieDetails() {
    const { id } = useParams();
    const { movies } = useContext(MoviesContext);
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const findMovie = movies.find((movie) => movie._id === id) || null;
        setMovie(findMovie);
    }, [movies, id]);

    return (
        <Container>
            <HeaderTitle />
            <div className="gap-4 grid md:grid-cols-3 grid-cols-1 mt-16">
                <div className="md:col-span-2">
                    <h2 className="text-5xl font-bold text-evergreen">{movie?.title}</h2>
                    <p className="text-xl text-gray-500 font-light py-4">Direção: {movie?.directors.join(', ')}</p>
                    <p className="text-gray-500 mt-6 text-justify">
                        {movie?.longDescription ? movie.longDescription : movie?.shortDescription}
                    </p>
                </div>
                <div className="md:col-span-1">
                    <img
                        src={movie?.thumbnailUrl}
                        alt=""
                        className="w-full h-fit rounded-lg"
                    />
                </div>
            </div>
            <div>
                <Title
                    title="Recomendações com base nesse filme"
                    className="my-6"
                />
                <div className="gap-5 grid md:grid-cols-4 grid-cols-1">
                    {movies.map(movie => {
                        return (
                            <Card id={movie._id} movie={movie} />
                        );
                    })}
                </div>
            </div>
        </Container>
    )
}