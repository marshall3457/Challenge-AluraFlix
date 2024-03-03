import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom"
import { Button, TextField } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const Position = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid #2A7AE4;
    align-items: center;
`

const Buscar = styled.div`
    display: flex;
    align-items: center;

`

// agregar una x para eliminar la consulta;

const Header = () => {
    const [busqueda, setBusqueda] = useState('');
    const navigate = useNavigate();


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Redirigir a la URL con la búsqueda al presionar Enter
            navigate(`/resultado?data=${busqueda}`);
        }
    };

    return(
        <Position>
            <Link to="/"><Logo src="logoAluraflix.png" alt="logo de aluraflix" size="70%" /></Link>
            <Buscar>
                <TextField value={busqueda} onKeyDown={handleKeyDown} onChange={(e) => {setBusqueda(e.target.value)}}></TextField>
                <Link to={`/resultado?data=${busqueda}`}><Button><FontAwesomeIcon icon={faSearch} /></Button></Link>
            </Buscar>
            <Link to="/formVideo"><Button variant="contained">Nuevo Video</Button></Link>
        </Position>
    )
}

export default Header