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
    margin-left: 1.5rem;
    margin-bottom: 1rem;
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

            </TitleContent>
            <Contenedor>
                {/* Poner un boton para ver todos los videos de la categoria */}
                {
                    videosCarousel.map((video, i) => {
                        const {linkVideo, linkImagen} = video;
                        return (
                            <ImagenCarouselWrapper key={i}>

                                <VideoLink href={linkVideo}>

                                    <ImagenCarousel
                                        src={linkImagen}
                                    />
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