import styled from "styled-components";
import { clientService } from "../../Service/client-service";
import { useEffect, useState } from "react";


const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    gap: 1rem;
    padding: 1rem 1rem 0 1rem;
    flex-wrap: wrap;
`

const ImagenCarousel = styled.img`
    width: 100%;
`

const VideoLink = styled.a`
    text-decoration: none;
    color: inherit;
  /* Agrega más estilos según sea necesario */
`;

const ImagenCarouselWrapper = styled.div`
    width: 31%;

`



const VideoTotal = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');


    const [videosCategoria, setVideosPorCategoria] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await clientService.listaVideos();
    
                // Filtrar los videos por categoría
                const videosCategoria = data
                    .filter(video => video.categoria === categoria)
                    .map(({ titulo, linkVideo, linkImagen }) => ({
                        titulo: titulo.length > 35 ? titulo.slice(0, 35) + " ..." : titulo,
                        linkVideo,
                        linkImagen,
                    }));
    
                setVideosPorCategoria(videosCategoria);
            } catch (error) {
                alert("Ocurrió un error");
            }
        };
    
        fetchData();
    }, [categoria]);


    console.log(videosCategoria)
    
 
    return(

        
        <Contenedor>

            {
                videosCategoria.map((videos, i) => {
                    const {titulo, linkImagen, linkVideo} = videos;

                    return (

                        <ImagenCarouselWrapper key={i}>

                            <VideoLink href={linkVideo}>

                                <ImagenCarousel src={linkImagen} />
                                <h3>{titulo}</h3>
                            </VideoLink>
                        </ImagenCarouselWrapper>


                    )

                })

            }
        </Contenedor>
            
        
        

         
    )


}

export default VideoTotal;