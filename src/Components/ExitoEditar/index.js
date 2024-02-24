import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Texto = styled.h1`
    text-align: center;

`

const ContenedorBotones = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;


`

const ExitoEditar = () => {

    return(
        <>
            <Texto>Editado con exito!!!</Texto>
            <ContenedorBotones>
                <Link to={"/formCategory"}><Button variant="contained">volver a categorias</Button></Link>
            </ContenedorBotones>
        </>

    )



}


export default ExitoEditar;