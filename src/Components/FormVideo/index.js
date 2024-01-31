import { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Button, TextField } from "@mui/material"
import { handleRegistroSubmit } from "../../Controllers/agregar.controller"

const Form  = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    height: calc(100vh - 203px);

`



const PositionButton = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div Button:first-child {
        margin-right: 1rem;
    }

`



const FormVideo = () => {


    const [dataTitulo, setDataTitulo] = useState({
        value: "",
        valid: null,
    })
    const [dataLinkVideo, setDataLinkVideo] = useState({
        value: "",
        valid: null,
    })
    const [dataLinkImagen, setDataLinkImagen] = useState({
        value: "",
        valid: null,
    })
    const [dataCategoria, setDataCategoria] = useState({
        value: "",
        valid: null,
    })
    const [dataDescripcion, setDataDescripcion] = useState({
        value: "",
        valid: null,
    })
    const [dataCodigo, setDataCodigo] = useState({
        value: "",
        valid: null,
    })


    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario por defecto
    
        // Llama a la función handleRegistroSubmit pasando los valores y el evento
        handleRegistroSubmit(
            dataTitulo.value,
            dataLinkVideo.value,
            dataLinkImagen.value,
            dataCategoria.value,
            dataDescripcion.value,
            dataCodigo.value,
            event
        );
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Nuevo video</h1>
            <TextField label="Título" fullWidth size="small" value={dataTitulo.value} onChange={(e) => setDataTitulo({value: e.target.value, valid: null})}/>
            <TextField label="Link del video" fullWidth size="small" value={dataLinkVideo.value} onChange={(e) => setDataLinkVideo({value: e.target.value, valid: null})}/>
            <TextField label="Link imagen del video" fullWidth size="small" value={dataLinkImagen.value} onChange={(e) => setDataLinkImagen({value: e.target.value, valid: null})}/>
            <TextField label="Escoja una categoría" fullWidth size="small" value={dataCategoria.value} onChange={(e) => setDataCategoria({value: e.target.value, valid: null})}/>
            <TextField label="Descripción" fullWidth multiline rows={3} value={dataDescripcion.value} onChange={(e) => setDataDescripcion({value: e.target.value, valid: null})}/>
            <TextField label="Código de seguridad" fullWidth size="small" value={dataCodigo.value} onChange={(e) => setDataCodigo({value: e.target.value, valid: null})}/>
            <PositionButton>
                <div>
                    <Button type="submit" variant="contained">Guardar</Button>
                    <Button variant="contained">Limpiar</Button>
                </div>
                
                <Link to="/formCategory"><Button variant="outlined">Nueva Categoría</Button></Link>

            </PositionButton>
            
        </Form>
    )
}


export default FormVideo 