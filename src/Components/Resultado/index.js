import { useEffect, useState } from "react";
import styled from "styled-components";
import { clientService } from "../../Service/client-service";
import { useLocation } from 'react-router-dom'; //utilizar para obtener la informacion de forma reactiva;


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

const Title =  styled.h4`


`

const Videos = styled.div`


`

const Resultado = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const resultadoUrl = urlParams.get('data');
  const [videosCategoria, setVideosPorCategoria] = useState([]);

  const esSimilar = (cadena1, cadena2) => {
    const limpiarAcentos = cadena => cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const palabras1 = limpiarAcentos(cadena1.toLowerCase()).split(' ');
    const palabras2 = limpiarAcentos(cadena2.toLowerCase()).split(' ');

    // Comprueba si ambas cadenas tienen al menos una palabra en común
    return palabras1.some(palabra => palabras2.includes(palabra));
  };




  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await clientService.listaVideos();
        const videosCategoria = data
          .filter(video => esSimilar(video.titulo, resultadoUrl))
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
  }, [resultadoUrl]);

  return (
    <Contenedor>
      <Title>Resultado para: {resultadoUrl}</Title>
      <Videos>
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
        </Videos>
      {/* Aquí puedes mostrar los videosCategoria o cualquier otro contenido */}
    </Contenedor>
  );
};
export default Resultado;