import backgroundImage from '../../assets/img/bg-header.png'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'

export function Header() {
    return (
        <header style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
        className='w-auto bg-cover bg-center bg-no-repeat'
        >
            <Container>
                <HeaderTitle />
                <div className='mt-28'>
                    <p className='text-7xl font-bold text-evergreen'>Encontre livros que <br/> seja a sua cara!</p>
                    <p className='text-gray-500 my-5 text-xl'>Lorem Ipsum dolor sit amet</p>      
                    <Button title={'Pesquisar Livros'}></Button>          
                </div>
            </Container>
        </header>
    )
}