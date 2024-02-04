import styled from "styled-components"

const Position = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16rem 2rem 0;
    margin-bottom: 5rem ;
`
const Bloque = styled.div`
    margin-right: 5rem;
`

const Title = styled.h1`
    color: white;
    background-color: #6BD1FF;
    width: fit-content;
    padding: 0.75rem;
    margin-bottom: 2rem;

`

const SubTitle = styled.h2`
    color: white;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: unset;

`
const Parrafo = styled.p`
    color: white;

`

const Imagen = styled.img`
    width: 47%;
    
`

const BannerMain = () => {
    return (
        /* Porner un algoritmo que me eliga un video aleatoriamente para ponerlo con todo */
        <Position>
            <Bloque>
                <Title>Front End</Title>
                <SubTitle>Challenge React</SubTitle>
                <Parrafo>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Parrafo>
            </Bloque>
            <Imagen src="player.png" alt="Banner de la pagina"/>
        </Position>

    )
}


export default BannerMain