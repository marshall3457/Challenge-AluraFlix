import styled from "styled-components"
import Carousel from '../Carousel';
import { useState, useEffect } from "react";
import BannerMain from "../BannerMain";
import { clientService } from "../../Service/client-service";
import { Button } from "@mui/material";


const MainStyle = styled.div`
    background-image: url("banner.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -100px;

`


// idea a construir: organizar y colocar los tres primeros videos de cada categoria, pero como maximo tambien colocar 3 categorias creadas;

const Main = () => {
    const [videosPorCategoria, setVideosPorCategoria] = useState({});

    useEffect(() => {
        clientService.listaVideos().then((data) => {
            const videosCategoria = {};

            data.forEach(({ titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad }) => {
                

                    if (!videosCategoria[categoria]) {
                        videosCategoria[categoria] = [];
                    }
                    videosCategoria[categoria].push({
                        linkVideo,
                        linkImagen,
                    });
                
            });

            setVideosPorCategoria(videosCategoria);
        }).catch((error) => alert("Ocurrió un error"));
    }, []);

    return (
        <>
            <MainStyle>
                <BannerMain />
                {Object.keys(videosPorCategoria).slice(0, 3).map((categoria, index) => (
                    <Carousel key={index} title={categoria} videosCarousel={videosPorCategoria[categoria].slice(0, 3)} />
                ))}
            </MainStyle>

            <Button variant="contained">Ver todas la categorias</Button> {/* Boton para ver todas la categorias, cabe recalcar que va a cargar las demas categorias mas no va a redicionar a otra pagina */}
        </>
    );
};


export default Main