import backgroundImage from '../../assets/img/bg-header.jpg'
import { Container } from '../Container/Container'
import { HeaderTitle } from './HeaderTitle'
import { Typewriter } from './Typewriter'

export function Header() {
    return (
        <header style={{
            backgroundImage: `url(${backgroundImage})`,
        }}
            className='w-auto bg-cover bg-center bg-no-repeat'
        >
            <Container>
                <HeaderTitle />
                <div className='md:mt-20 mt-5 mb-2'>
                    <p className='md:text-7xl text-3xl font-bold text-evergreen bg-opacity-50 bg-amber-100 rounded-lg pl-1 p-5 inline-block'>
                        Filmes que combinam <br />com você!
                    </p>
                    <p className='text-gray-500 my-5 text-xl h-10 overflow-hidden'>
                        <Typewriter text="You shall not pass!" />
                    </p>  
                </div>                
            </Container>
        </header>
    )
}