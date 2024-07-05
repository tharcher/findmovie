import { useCallback, useContext, useEffect, useState } from "react";
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
    const [selectedGender, setSelectedGender] = useState<string[]>([]);
    const { movies, handleSetMovies } = useContext(MoviesContext);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleSubmit = useCallback(
        async (value: string, categories: string[] = []) => {
            if (!value || value.trim() === "") {
                console.log("Search value is empty. Skipping search.");
            }
            console.log("teste front: ", value, categories);
            const response = await searchMovies(value, categories);
            handleSetMovies(response);
        },
        [handleSetMovies]
    );

    const handleSelected = useCallback((title: string) => {
        setSelectedGender(prevSelectedGender => {
            let newSelectedGender;
            if (prevSelectedGender.includes(title)) {
                newSelectedGender = prevSelectedGender.filter(item => item !== title);
            } else {
                newSelectedGender = [...prevSelectedGender, title];
            }

            // Chamar handleSubmit com o novo estado
            handleSubmit('', newSelectedGender);
            return newSelectedGender;
        });
    }, [handleSubmit]);

    return (
        <div className="mb-6">
            <Header />
            <Container>
                <Title title="O que você deseja assistir hoje?" />
                <div className="md:gap-x-5 gap-x-3 grid md:grid-cols-8 grid-cols-4 my-6 gap-y-1">
                    {genderMovies.map((movie, index) => (
                        <Button
                            key={index}
                            title={movie}
                            variant={selectedGender.includes(movie) ? 'dark' : 'light'}
                            onClick={() => handleSelected(movie)}
                            className="hover:scale-125 transform transition-transform duration-300 ease-in-out"
                        />
                    ))}
                </div>
                <div className="py-7">
                    <p className="text-evergreen font-medium text-2xl">
                        Gostaria de receber recomendações?
                    </p>
                    <Input placeholder="Eu gostaria de assistir..."
                        onKeyDown={(e: any) => {
                            if (e.key === "Enter") {
                                handleSubmit(e.target.value, selectedGender);
                            }
                        }}
                    />
                </div>
                <Title title="Filmes recomendados" className="my-5" />
                <div className="grid md:grid-cols-4 grid-cols-1 gap-16px gap-y-8">
                    {movies.map(movie => {
                        return (
                            <Card key={movie._id} id={movie._id} movie={movie} />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}