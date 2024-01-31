import styled from "styled-components"
import Footer from "../Footer";

const Contenedor = styled.div`
height: calc(100% - ${Footer.height});
display: flex;
justify-content: center;
align-items: center;
`;

const TextoError = styled.h1`
color: red;
text-align: center;
`;

const Error404 = () => {


    return(
        <Contenedor>
            <TextoError>Pagina no encontrada</TextoError>
        </Contenedor>
    )
}


export default Error404