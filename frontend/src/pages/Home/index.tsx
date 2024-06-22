import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

const genderBooks = [
    'Ação',
    'Aventura',
    'Comédia',
    'Terror',
    'Ficção',
    'Drama',
    'Documentário',
  ]

export function Home() {
    return(
        <>
      <Header/>
      <Container>
        <Title title="O que você deseja ler hoje?"/>
        {genderBooks.map((book) => (
          <Button title={book} variant="light" />
        ))}
      </Container>
    </>
    )
}