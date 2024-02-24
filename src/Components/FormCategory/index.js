import { useEffect, useState } from "react"
import styled from "styled-components"
import { handleRegistroSubmitCategory } from "../../Controllers/agregar.controller"
import { TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { clientService } from "../../Service/client-service";
import { Link } from "react-router-dom";
import validacionFormulario from "../../Validaciones/validacionVideo";
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



const FormCategoria  = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        // Llamar a la función listaCategorias y actualizar el estado con las categorías
        const fetchCategorias = async () => {
          try {
            const data = await clientService.listaCategorias();
            setCategorias(data);
          } catch (error) {
            console.error('Error al obtener las categorías:', error);
          }
        };
    
        fetchCategorias();
    }, []);

    const [nombreCategoria, setNombreCategoria] = useState({
        value: "",
        valid: null,
    })
    const [descripcionCategoria, setDescripcionCategoria] = useState({
        value: "",
        valid: null,
    })
    const [color, setColor] = useState({
        value: "#00FFFF"
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
        setColor({ value: "#00FFFF" });
        setCodigoSeguridad({ value: "", valid: null });

    };
    

    return (
        <ContenedorFormTable>
            <Form onSubmit={handleSubmit}>
                <h1>Nueva categoría</h1>
                <TextField 
                    label="Nombre" 
                    fullWidth size="small" 
                    error={nombreCategoria.valid === false} 
                    helperText={nombreCategoria.valid === false && "El campo no debe estar vacio"} 
                    value={nombreCategoria.value} 
                    onChange={(e) => setNombreCategoria({value: e.target.value, valid: validacionFormulario(e.target.value)})}
                />
                <TextField 
                    label="Descripcion"  
                    multiline 
                    rows={3} 
                    fullWidth 
                    error={descripcionCategoria.valid === false} 
                    helperText={descripcionCategoria.valid === false && "El campo no debe estar vacio"} 
                    value={descripcionCategoria.value} 
                    onChange={(e) => setDescripcionCategoria({value: e.target.value, valid: validacionFormulario(e.target.value)})} 
                />
                <TextField 
                    label="Color" 
                    type="color" 
                    fullWidth 
                    size="small" 
                    value={color.value} 
                    onChange={(e) => setColor({value: e.target.value})}
                />
                <TextField
                    label="Código de seguridad" 
                    size="small" 
                    fullWidth  
                    error={codigoSeguridad.valid === false} 
                    helperText={codigoSeguridad.valid === false && "El campo no debe estar vacio"} 
                    value={codigoSeguridad.value} 
                    onChange={(e) => setCodigoSeguridad({value: e.target.value, valid: validacionFormulario(e.target.value)})}
                />

                <PositionButton>
                    <Button type="submit" variant="contained">Guardar</Button>
                    <Button type="button" variant="contained" onClick={handleLimpiar}>Limpiar</Button>
                </PositionButton>

                
            </Form>

            <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell variant="head" align="left" style={{ width: "10%", fontWeight: 'bold'}}>
                        Nombre
                        </TableCell>
                        <TableCell variant="head" align="left" style={{ width: "60%", fontWeight: 'bold'}}>
                        Descripcion
                        </TableCell>
                        <TableCell variant="head" align="center" style={{ width: "15%", fontWeight: 'bold'}}>
                        Remover
                        </TableCell>
                        <TableCell
                        variant="head"
                        align="center"
                        style={{
                            width: "15%",
                            fontWeight: 'bold'
                        }}
                        >
                        Editar
                        </TableCell>
                    </TableRow>
                    </TableHead>
                </Table>

                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    <Table>
                        <TableBody>
                            {categorias.map((categoria) => (
                                <TableRow key={categoria.id}>
                                <TableCell align="left" style={{ width: "10%"}}>{categoria.nombre}</TableCell>
                                <TableCell align="left" style={{ width: "60%"}}>{categoria.descripcion}</TableCell>
                                <TableCell style={{ width: "15%"}}>
                                    <Button variant="contained" fullWidth onClick={() => clientService.eliminarCategoria(categoria.id)}>Remover</Button>
                                </TableCell>
                                <TableCell style={{ width: "15%"}}>
                                    <Link to={`/editar?id=${categoria.id}`}> <Button variant="contained" fullWidth>Editar</Button></Link>
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </TableContainer>
        
        </ContenedorFormTable>

    )


}


export default FormCategoria