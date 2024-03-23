import { Link } from "react-router-dom"
import styled from "styled-components"

const Position = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16rem 2rem 0;
    margin-bottom: 5rem ;
    flex-wrap: wrap;

    @media (max-width: 500px){
        padding: 3rem 2rem 0;

    }
`
const Bloque = styled.div`
    margin-right: 2rem;
`

const Title = styled.h1`
    color: black;
    font-weight: bold;
    background-color: #6BD1FF;
    width: fit-content;
    padding: 0.75rem;
    margin-bottom: 2rem;

`

const SubTitle = styled.h2`
    color: black;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: unset;
    font-weight: bold;


`
const Parrafo = styled.p`
    color: black;
    font-weight: bold;

`

const Imagen = styled.img`
    width: 100%;
    border-radius: 1rem;
`


const BannerMain = () => {
    return (
        /* Porner un algoritmo que me eliga un video aleatoriamente para ponerlo con todo */
        <Position>
            <Bloque>
                <Title>Comedia</Title>
                <SubTitle>Franco Escamilla - Monólogo No somos iguales</SubTitle>
                <Parrafo>Video de franco escamilla sobre de como no somos iguales</Parrafo>
            </Bloque>
            <Link to={`https://www.youtube.com/watch?v=8AiulsAi_bM&t=89s`}><Imagen src="https://i.ytimg.com/vi/8AiulsAi_bM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD43t2HDeZJZWLGXCitA0l9jWSX5g" alt="Banner de la pagina"/></Link>
        </Position>

    )
}


export default BannerMain