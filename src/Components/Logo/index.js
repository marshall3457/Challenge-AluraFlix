import styled from "styled-components";



const Logo = (props) => {
    const ImagenLogo = styled.img`
        width: ${props.size};


    `
    return (
        <ImagenLogo src={props.src} ></ImagenLogo>

    )

}


export default Logo;