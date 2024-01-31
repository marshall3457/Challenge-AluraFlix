import styled from "styled-components";


const Contenedor = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
`

const ImagenCarousel = styled.img`
    width: 30%;

`

const Title = styled.h1`
    background-color: #00C86F;
    max-width: fit-content;
    padding: 0.5rem;
    margin-right: 0.5rem;

`

const TitleContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
`

const Carousel = (props) => {
    const {videosCarousel} = props

    return (
        <div>
            <TitleContent>
                {props.title && <Title>{props.title}</Title>}
                <h4>{props.subTitle}</h4>

            </TitleContent>
            <Contenedor>
                {
                    videosCarousel.map((video, i) => {
                        const {titulo, linkVideo, linkImagen, categoria, descripcion, copiaSeguridad} = video;
                        return (
                            <ImagenCarousel 
                                key={i}
                                src={linkImagen}
                                categoria={categoria}
                                titulo={titulo}
                                linkVideo={linkVideo}
                                descripcion={descripcion}
                                copiaSeguridad={copiaSeguridad}

                            />

                        )
                    })
                }

            </Contenedor>
        </div>

    )


}

export default Carousel; 