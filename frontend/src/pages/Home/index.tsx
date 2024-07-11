import { useCallback, useContext, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { searchMovies } from "../../services/movies";
import { MoviesContext } from "../../contexts/moviesContext";

const genderMovies = [
    'Ação',
    'Aventura',
    'Comédia',
    'Romance',
    'Terror',
    'Ficção',
    'Drama',
    'Biografia'
]

export function Home() {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const { movies, handleSetMovies } = useContext(MoviesContext);
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSubmit = useCallback(
        async (value: string, genres: string[] = []) => {
            try {
                const response = await searchMovies(value, genres);
                handleSetMovies(response);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
                handleSetMovies([]);
            }
        },
        [handleSetMovies]
    );

    const handleSelected = useCallback((genre: string) => {
        setSelectedGenres(prevSelectedGenres => {
            const isSelected = prevSelectedGenres.includes(genre);
            const newSelectedGenres = isSelected
                ? prevSelectedGenres.filter(item => item !== genre)
                : [...prevSelectedGenres, genre];

            handleSubmit(searchValue, newSelectedGenres);
            return newSelectedGenres;
        });
    }, [handleSubmit, searchValue]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    return (
        <div className="mb-6">
            <Header />
            <Container>
                <Title title="O que você deseja assistir hoje?" />
                <div className="md:gap-x-5 gap-x-3 grid md:grid-cols-8 grid-cols-4 my-6 gap-y-1">
                    {genderMovies.map((genre, index) => (
                        <Button
                            key={index}
                            title={genre}
                            variant={selectedGenres.includes(genre) ? 'dark' : 'light'}
                            onClick={() => handleSelected(genre)}
                            className="hover:scale-125 transform transition-transform duration-300 ease-in-out"
                        />
                    ))}
                </div>
                <div className="py-7">
                    <p className="text-evergreen font-medium text-2xl">
                        Gostaria de receber recomendações?
                    </p>
                    <Input
                        placeholder="Eu gostaria de assistir..."
                        value={searchValue}
                        onChange={handleInputChange}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === "Enter") {
                                handleSubmit(searchValue, selectedGenres);
                            }
                        }}
                    />
                </div>
                <Title title="Filmes recomendados" className="my-5" />
                <div className="grid md:grid-cols-4 grid-cols-1 gap-16px gap-y-8">
                    {movies && movies.length > 0 ? (
                        movies.map(movie => (
                            <Card id={movie._id} movie={movie} key={movie._id}/>
                        ))
                    ) : (
                        <p>Nenhum filme encontrado.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}
