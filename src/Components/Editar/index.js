import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { clientService } from "../../Service/client-service";
import { actualizarCategoria } from "../../Controllers/actualizar.controller";

const Form =  styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

const PositionButton = styled.div`
    display: flex;
    width: 100%;

    Button:first-child {
        margin-right: 1rem;
    }

`

const Editar = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const [dataCategoria, setCategoria] = useState({
        nombre: '',
        descripcionCategoria: '',
        color: '',
        codigoSeguridad: '',
    });

    const [nombreCategoria, setNombreCategoria] = useState({
        value: "",
        valid: null,
    })
    const [descripcionCategoria, setDescripcionCategoria] = useState({
        value: "",
        valid: null,
    })
    const [color, setColor] = useState({
        value: "",
        valid: null,
    })
    const [codigoSeguridad, setCodigoSeguridad] = useState({
        value: "",
        valid: null,
    })


    useEffect(() => {


        // Llamar a la función listaCategorias y actualizar el estado con las categorías
        const fetchCategorias = async () => {
          try {
            const data = await clientService.detalleCategoria(id);
            setCategoria(data);
          } catch (error) {
            console.error('Error al obtener las categorías:', error);
          }
        };
        
        fetchCategorias();
    }, [id]);


    useEffect(() => {
        setNombreCategoria({ value: dataCategoria.nombre, valid: null });
        setDescripcionCategoria({ value: dataCategoria.descripcion, valid: null });
        setColor({ value: dataCategoria.color, valid: null });
        setCodigoSeguridad({ value: dataCategoria.codigoSeguridad, valid: null });
    }, [dataCategoria]);


    console.log(dataCategoria.nombre); //si me imprime



    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario por defecto
    
        // Llama a la función handleRegistroSubmit pasando los valores y el evento
        actualizarCategoria(
            nombreCategoria.value,
            descripcionCategoria.value,
            color.value,
            codigoSeguridad.value,
            id,
            event
        );
    };

    const handleLimpiar = () => {
        setNombreCategoria({ value: "", valid: null });
        setDescripcionCategoria({ value: "", valid: null });
        setColor({ value: "#ffffff", valid: null });
        setCodigoSeguridad({ value: "", valid: null });

    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Editar categoria</h1>
            <TextField label="Nombre" fullWidth size="small" value={nombreCategoria.value} onChange={(e) => setNombreCategoria({value: e.target.value, valid: null})}/>
            <TextField label="Descripcion"  multiline rows={3} fullWidth value={descripcionCategoria.value} onChange={(e) => setDescripcionCategoria({value: e.target.value, valid: null})} />
            <TextField label="Color" type="color" fullWidth size="small" value={color.value} onChange={(e) => setColor({value: e.target.value, valid: null})}/>
            <TextField label="Código de seguridad" size="small" fullWidth  value={codigoSeguridad.value} onChange={(e) => setCodigoSeguridad({value: e.target.value, valid: null})}/>
            <PositionButton>
                <Button type="submit" variant="contained">Guardar</Button>
                <Button type="button" variant="contained" onClick={handleLimpiar}>Limpiar</Button>

            </PositionButton>

        </Form>


    )




}


export default Editar;


