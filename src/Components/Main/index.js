import styled from "styled-components"
import Carousel from '../Carousel';
import { useState, useEffect } from "react";
import BannerMain from "../BannerMain";
import { clientService } from "../../Service/client-service";


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
                        titulo,
                        linkVideo,
                        linkImagen,
                        descripcion,
                        codigoSeguridad,
                    });
                
            });

            setVideosPorCategoria(videosCategoria);
        }).catch((error) => alert("Ocurrió un error"));
    }, []);

    return (
        <MainStyle>
            <BannerMain />
            {Object.keys(videosPorCategoria).slice(0, 3).map((categoria, index) => (
                //console.log(videosPorCategoria[categoria]);
                <Carousel key={index} title={categoria} videosCarousel={videosPorCategoria[categoria]} />
            ))}
        </MainStyle>
    );
};


export default Main