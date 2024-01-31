import { v4 as uuid } from 'uuid';

const listaVideos = () => fetch("http://localhost:3000/videos").then((respuesta) => respuesta.json());

/*
const crearCategoria = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad) => {
    return fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid.v4(), titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad})
    })
}
*/


const crearVideo = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad) => {
    return fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid(), titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad})
    })
}


const eliminarVideo = (id) => {
    return fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE"
    })
}

const detalleVideo = (id) => {
    return fetch(`http://localhost:3000/videos/${id}`).then((respuesta) => 
    respuesta.json());
}

const actualizarVideo = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad, id) => {
    return fetch(`http://localhost:3000/videos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad})  //Para convertilo en una cadena json osea un objeto ya que no lee string normales,
    })                                          //En el contexto de la función actualizarCliente, se utiliza JSON.stringify para convertir el objeto {nombre, email} en una cadena JSON. Esto se debe a que el cuerpo (body) de la solicitud HTTP debe ser una cadena, y no un objeto JavaScript.
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))

}


export const clientService = {
    listaVideos,
    crearVideo,
    eliminarVideo,
    detalleVideo,
    actualizarVideo,

};




