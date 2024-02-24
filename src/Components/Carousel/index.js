import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    gap: 1rem;
    padding: 0 1rem;
`

const ImagenCarousel = styled.img`
    width: 100%;
`



const TitleContent = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 1.5rem;
    justify-content: space-between;
`

const VideoLink = styled.a`
    text-decoration: none;
    color: inherit;
  /* Agrega más estilos según sea necesario */
`;

const ImagenCarouselWrapper = styled.div`
    width: 500px;

`

const Title = styled.h1`
    background-color: ${props => props.color};
    max-width: fit-content;
    padding: 0.5rem;
    margin-right: 0.5rem;

`

const Carousel = (props) => {
    const {videosCarousel, color, title} = props

    return (
        <div>
            

            <TitleContent>
                <Title color={color}>{title}</Title>
                <Link to={`/videoTotal?categoria=${title}`}><Button variant="contained">Ver todos los videos</Button></Link>
            </TitleContent>
            <Contenedor>
                {/* Poner un boton para ver todos los videos de la categoria */}
                {
                    videosCarousel.map((video, i) => {
                        const {titulo, linkVideo, linkImagen} = video;

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
        </div>

    )


}

export default Carousel; 