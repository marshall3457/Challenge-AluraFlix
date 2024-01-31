import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const Position = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid #2A7AE4;
`

const Header = () => {
    return(
        <Position>
            <Link to="/main"><Logo src="logoAluraflix.png" alt="logo de aluraflix" size="70%" /></Link>
            <Link to="/formVideo"><Button variant="contained">Nuevo Video</Button></Link>
        </Position>
    )
}

export default Header