import { clientService } from "../Service/client-service";

const handleRegistroSubmitCategory = (nombre, descripcion, color, codigoSeguridad, event) => {
    
    event.preventDefault();

    clientService
    .crearCategoria(nombre, descripcion, color, codigoSeguridad)
    .then(() => {
        console.log("Hecho categoria");
        //window.location.href = "/screens/registro_completado.html";
    })
    .catch(err =>console.log("Error al realizar la solicitud:", err));

};

const handleRegistroSubmit = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad, event) => {
    
    event.preventDefault();

    clientService
    .crearVideo(titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad)
    .then(() => {
        console.log("Hecho");
        //window.location.href = "/screens/registro_completado.html";
    })
    .catch(err =>console.log("Error al realizar la solicitud:", err));

};

export { handleRegistroSubmit, handleRegistroSubmitCategory };