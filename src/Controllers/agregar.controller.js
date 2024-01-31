import { clientService } from "../Service/client-service";

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

export { handleRegistroSubmit };