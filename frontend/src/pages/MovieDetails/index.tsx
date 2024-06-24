import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export function MovieDetails() {
    const { id } = useParams()
    return (
        <Container>
            <HeaderTitle />
            <div className="gap-4 grid md:grid-cols-3 grid-cols-1 mt-16">
                <div className="md:col-span-2">
                    <h2 className="text-5xl font-bold text-evergreen">Kill Bill</h2>
                    <p className="text-xl text-gray-500 font-light py-4">Direção: Quentin Tarantino</p>
                    <p className="text-gray-500 mt-6 text-justify">
                        Kill Bill é um filme norte-americano de 2003 e 2004, do roteirista e diretor Quentin Tarantino. Originalmente concebido como um único filme, foi lançado em dois volumes (nos EUA, Kill Bill: Volume 1 no outono de 2003 e Kill Bill: Volume 2 na primavera de 2004), devido à sua duração de aproximadamente quatro horas. O filme é um drama fictício de vingança, que homenageia antigos gêneros, tais como filmes afro-americanos Blaxploitation de gênero Exploitation, filmes antigos asiáticos de kung fu, filmes japoneses de samurai, western spaghetti italiano, trash, anime, uma grande referência à música popular e cultura pop; e alta violência deliberada.
                    </p>
                </div>
                <div className="md:col-span-1">
                    <img
                        src="https://br.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/87/81/80/19969754.jpg"
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
                <div className="gap-5 grid md:grid-cols-3 grid-cols-1">
                    <Card id="123" />
                    <Card id="123" />
                    <Card id="123" />
                    <Card id="123" />
                </div>
            </div>
        </Container>
    )
}