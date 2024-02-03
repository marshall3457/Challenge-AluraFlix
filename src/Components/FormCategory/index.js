import { useState } from "react"
import styled from "styled-components"
import { TextField, Button, TableCell, TableRow } from "@mui/material"
import { handleRegistroSubmitCategory } from "../../Controllers/agregar.controller"

const ContenedorFormTable = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    flex-direction: column;
`

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

const Tabla = styled.table`
    border-collapse: collapse;
    width: 100%;
    td, th {
        border: 1px solid #000; 
        padding: 0;
    }


`

const ButtonAgregados = styled(Button)`
    &&{
        padding: 0;
        text-transform: none;
        width: 100%;
        border-radius: 0;

    }
    


`

const TableContainer = styled.div`
    width: 100%;
    height: 222px;
    overflow-y: auto;

`





const FormCategoria  = () => {

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

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se envíe el formulario por defecto
    
        // Llama a la función handleRegistroSubmit pasando los valores y el evento
        handleRegistroSubmitCategory(
            nombreCategoria.value,
            descripcionCategoria.value,
            color.value,
            codigoSeguridad.value,
            event
        );
    };

    const handleLimpiar = () => {
        setNombreCategoria({ value: "", valid: null });
        setDescripcionCategoria({ value: "", valid: null });
        setColor({ value: "", valid: null });
        setCodigoSeguridad({ value: "", valid: null });

    };
    
    
    return (
        <ContenedorFormTable>
            <Form onSubmit={handleSubmit}>
                <h1>Nueva categoría</h1>
                <TextField label="Nombre" fullWidth size="small" value={nombreCategoria.value} onChange={(e) => setNombreCategoria({value: e.target.value, valid: null})}/>
                <TextField label="Descripcion"  multiline rows={3} fullWidth value={descripcionCategoria.value} onChange={(e) => setDescripcionCategoria({value: e.target.value, valid: null})} />
                <TextField label="Color" fullWidth size="small" value={color.value} onChange={(e) => setColor({value: e.target.value, valid: null})}/>
                <TextField label="Código de seguridad" size="small" fullWidth  value={codigoSeguridad.value} onChange={(e) => setCodigoSeguridad({value: e.target.value, valid: null})}/>
                <PositionButton>
                    <Button type="submit" variant="contained">Guardar</Button>
                    <Button type="button" variant="contained" onClick={handleLimpiar}>Limpiar</Button>

                </PositionButton>

                
            </Form>

            <TableContainer >
                <Tabla border={1}>

                <TableRow >
                    <TableCell  
                        variant="head"
                        align={"right"}
                        style={{ width: "20%"}}
                        sx={{
                            backgroundColor: 'background.paper', 
                            textAlign: 'start'
                        }} 
                    >
                        Nombre
                    </TableCell>
                    <TableCell  
                        variant="head"
                        align={"right"}
                        style={{ width: "50%"}}
                        sx={{
                            backgroundColor: 'background.paper', 
                            textAlign: 'start'

                        }} 
                    >
                        Descripcion
                    </TableCell>
                    
                    <TableCell  
                        variant="head"
                        align={"right"}
                        style={{ width: "10%"}}
                        sx={{
                            backgroundColor: 'background.paper', 
                            textAlign: 'center'

                        }} 
                    >
                        Remover
                    </TableCell>
                    
                    <TableCell  
                        variant="head"
                        align={"right"}
                        style={{ 
                            width: "10%",
                            padding: "0",
                            margin: "0"
                        }}
                        sx={{
                            backgroundColor: 'background.paper', 
                            textAlign: 'center',
                            padding: 0,
                            margin: 0
                        }} 
                    >
                        Editar
                    </TableCell>
                    
                    
                </TableRow>
                <TableRow>

                    <TableCell>
                        Dato 1
                    </TableCell>
                    <TableCell>
                        Dato 1

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Remover</ButtonAgregados>

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Editar</ButtonAgregados>

                    </TableCell>

                </TableRow>
                <TableRow>

                    <TableCell>
                        Dato 1
                    </TableCell>
                    <TableCell>
                        Dato 1

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Remover</ButtonAgregados>

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Editar</ButtonAgregados>

                    </TableCell>

                </TableRow>
                <TableRow>

                    <TableCell>
                        Dato 1
                    </TableCell>
                    <TableCell>
                        Dato 1

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Remover</ButtonAgregados>

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Editar</ButtonAgregados>

                    </TableCell>
                </TableRow>
                <TableRow>

                    <TableCell>
                        Dato 1
                    </TableCell>
                    <TableCell>
                        Dato 1

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Remover</ButtonAgregados>

                    </TableCell>
                    <TableCell>
                        <ButtonAgregados variant="contained">Editar</ButtonAgregados>

                    </TableCell>

                </TableRow>
                   
            </Tabla>
            </TableContainer>

        </ContenedorFormTable>

    )


}


export default FormCategoria