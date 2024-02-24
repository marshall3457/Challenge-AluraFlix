import { clientService } from "../Service/client-service";


const actualizarCategoria = (nombre, descripcion, color, codigoSeguridad, id, event) => {
    event.preventDefault();

    clientService.actualizarCategoria(nombre, descripcion, color, codigoSeguridad, id).then(() => {
        window.location.href = "/exitoEditar";
    }).catch(err =>console.log("Error al realizar la solicitud:", err));

}

export {actualizarCategoria}