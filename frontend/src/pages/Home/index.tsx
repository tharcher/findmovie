import { useCallback, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Card } from "../../components/Button/Card/Card";

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
    console.log('Home - selectedGender:', selectedGender);

    const handleSelected = useCallback((title: string) => {
        console.log('Home - title:', title);

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
                <div className="gap-8 grid md:grid-cols-8 grid-cols-4 my-6">
                    {genderMovies.map((movie) => (
                        <Button
                            title={movie}
                            variant={selectedGender.includes(movie) ? 'dark' : 'light'}
                            onClick={() => handleSelected(movie)} />
                    ))}
                </div>
                <div className="py-7">
                    <p className="text-evergreen font-medium text-2xl">
                        Qual é o seu gênero preferido de filmes para receber recomendações?
                    </p>
                    <input
                        type="text"
                        placeholder="Eu gostaria de assistir..."
                        className="outline-none shadow-lg border border-gray-100 rounded-lg w-full p-3 mt-3"
                    />
                </div>
                <Title title="Filmes recomendados?" className="my-5"/>
                <Card />
            </Container>
        </div>
    )
}