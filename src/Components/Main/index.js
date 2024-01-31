import styled from "styled-components"
/* import Carousel from '../Carousel';*/
import BannerMain from "../BannerMain";

const MainStyle = styled.div`
background-image: url("banner.png");
background-repeat: no-repeat;
background-size: 100%;
background-position-y: -100px;

`

const Main = () => {

    return(
        <MainStyle>
            <BannerMain/>
            {/*    <Carousel videosCarousel={videosCarousel[0].videos} />
            <Carousel videosCarousel={videosCarousel[1].videos}  title="Back End" subTitle="Formación Back End de Alura Latam"/>
            <Carousel videosCarousel={videosCarousel[2].videos}  title="Innovacion y Gestion" subTitle="Formación Innovación y Gestión de Alura Latam"/> */} 
        </MainStyle>
    )
}


export default Main