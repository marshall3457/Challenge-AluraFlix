import styled from "styled-components"
import Carousel from '../Carousel';
import { useState, useEffect } from "react";
import BannerMain from "../BannerMain";
import { clientService } from "../../Service/client-service";


const MainStyle = styled.div`
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -100px;
`;


// idea a construir: organizar y colocar los tres primeros videos de cada categoria, pero como maximo tambien colocar 3 categorias creadas;
// averiguar mas sobre el effect, ya que no se me hace mucho sentido que carge todo el componente y despues los datos
//quitar los effects y darles await a todos los datos;
const Main = () => {
    const [videosPorCategoria, setVideosPorCategoria] = useState([]);
    const [colorPorCategorias, setColorPorCategoria] = useState([]);
    


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await clientService.listaCategorias();
    
                const colorCategoria = {};
    
                data.forEach(({ nombre, descripcion, color, codigoSeguridad }) => {
                    if (!colorCategoria[nombre]) {
                        colorCategoria[nombre] = [];
                    }
                    colorCategoria[nombre].push({
                        color
                    });
                });
    
                setColorPorCategoria({ ...colorCategoria });
            } catch (error) {
                alert("Ocurrió un error");
            }
        };
    
        fetchData();
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await clientService.listaVideos();
    
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
    
                setVideosPorCategoria({ ...videosCategoria });
            } catch (error) {
                alert("Ocurrió un error");
            }
        };
    
        fetchData();
    }, []);
    
    
    const llavesCategorias = Object.keys(videosPorCategoria);



    console.log(colorPorCategorias)

    return (
        <>
            <MainStyle style={{ backgroundImage: `url(${videosPorCategoria[llavesCategorias[0]] && videosPorCategoria[llavesCategorias[0]][2] && videosPorCategoria[llavesCategorias[0]][2].linkImagen})` }}>
                <BannerMain />
                {Object.keys(videosPorCategoria).slice(0, 3).map((categoria, index) => (
                    <Carousel key={index} title={categoria} color={colorPorCategorias[categoria][0].color} videosCarousel={videosPorCategoria[categoria].slice(0, 3)} />
                ))}
            </MainStyle>

        </>
    );
};


export default Main