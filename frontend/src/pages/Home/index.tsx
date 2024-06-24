import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";

const genderMovies = [
    'Ação',
    'Aventura',
    'Comédia',
    'Terror',
    'Ficção',
    'Drama',
    'Biografia'
]

export function Home() {
    const [selectedGender, setSelectedGender] = useState<string[]>([]);

    const handleSelected = useCallback((title: string) => {
        if (selectedGender.includes(title)) {
            const removeGender = selectedGender.filter(item => item !== title);
            setSelectedGender(removeGender);
        } else {
            setSelectedGender([...selectedGender, title]);
        }

    }, [selectedGender]);

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
                        Qual é o seu gênero preferido de filmes para receber recomendações?
                    </p>
                    <Input placeholder="Eu gostaria de assistir..." />
                </div>
                <Title title="Filmes recomendados?" className="my-5" />
                <Card id="123" />
            </Container>
        </div>
    )
}