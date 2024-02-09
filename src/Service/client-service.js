import { v4 as uuid } from 'uuid';

const listaVideos = () => fetch("http://localhost:3000/videos").then((respuesta) => respuesta.json());

const listaCategorias = () => fetch("http://localhost:3000/categorias").then((respuesta) => respuesta.json());


const crearCategoria = (nombre, descripcion, color, codigoSeguridad) => {
    return fetch("http://localhost:3000/categorias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid(), nombre, descripcion, color, codigoSeguridad})
    })
};


const crearVideo = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad) => {
    return fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid(), titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad})
    })
};


const eliminarVideosPorCategoria = async (id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/categorias/${id}`);
        const categoria = await respuesta.json();

        const response = await fetch(`http://localhost:3000/videos?categoria=${categoria.nombre}`);
        const videos = await response.json(); 
        
        for(let i = 0; i < videos.length; i++){
            await fetch(`http://localhost:3000/videos/${videos[i].id}`, {
                method: "DELETE"
            })

        }


    }catch (error) {
        console.error('Error:', error.message);
    }
}

const eliminarCategoria = async (id) => {
    // Eliminar videos de la categoría
    await eliminarVideosPorCategoria(id);

    return fetch(`http://localhost:3000/categorias/${id}`, {
        method: "DELETE"
    })
};




const eliminarVideo = (id) => {
    return fetch(`http://localhost:3000/videos/${id}`, {
        method: "DELETE"
    })
};

const detalleCategoria = (id) => {
    return fetch(`http://localhost:3000/categorias/${id}`).then((respuesta) => 
    respuesta.json());
};

const detalleVideo = (id) => {
    return fetch(`http://localhost:3000/videos/${id}`).then((respuesta) => 
    respuesta.json());
};

const actualizarCategoria = (nombre, descripcion, color, codigoSeguridad, id) => {
    return fetch(`http://localhost:3000/categorias/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, descripcion, color, codigoSeguridad})  //Para convertilo en una cadena json osea un objeto ya que no lee string normales,
    })                                          //En el contexto de la función actualizarCliente, se utiliza JSON.stringify para convertir el objeto {nombre, email} en una cadena JSON. Esto se debe a que el cuerpo (body) de la solicitud HTTP debe ser una cadena, y no un objeto JavaScript.
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))

};



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

};


export const clientService = {
    listaVideos,
    listaCategorias,
    crearVideo,
    crearCategoria,
    eliminarVideo,
    eliminarCategoria,
    detalleVideo,
    detalleCategoria,
    actualizarVideo,
    actualizarCategoria,
};




