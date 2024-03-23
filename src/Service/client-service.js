import { v4 as uuid } from 'uuid';

const listaVideos = () => fetch("https://fake-api-bay.vercel.app/videos").then((respuesta) => respuesta.json());

const listaCategorias = () => fetch("https://fake-api-bay.vercel.app/categorias").then((respuesta) => respuesta.json());


const crearCategoria = (nombre, descripcion, color, codigoSeguridad) => {
    return fetch("https://fake-api-bay.vercel.app/categorias", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid(), nombre, descripcion, color, codigoSeguridad})
    })
};


const crearVideo = (titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad) => {
    return fetch("https://fake-api-bay.vercel.app/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({id: uuid(), titulo, linkVideo, linkImagen, categoria, descripcion, codigoSeguridad})
    })
};


const eliminarVideosPorCategoria = async (id) => {
    try {
        const respuesta = await fetch(`https://fake-api-bay.vercel.app/categorias/${id}`);
        const categoria = await respuesta.json();

        const response = await fetch(`https://fake-api-bay.vercel.app/videos?categoria=${categoria.nombre}`);
        const videos = await response.json(); 
        
        for(let i = 0; i < videos.length; i++){
            await fetch(`https://fake-api-bay.vercel.app/videos/${videos[i].id}`, {
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

    return fetch(`https://fake-api-bay.vercel.app/categorias/${id}`, {
        method: "DELETE"
    })
};




const eliminarVideo = (id) => {
    return fetch(`https://fake-api-bay.vercel.app/videos/${id}`, {
        method: "DELETE"
    })
};

const detalleCategoria = (id) => {
    return fetch(`https://fake-api-bay.vercel.app/categorias/${id}`).then((respuesta) => 
    respuesta.json());
};

const detalleVideo = (id) => {
    return fetch(`https://fake-api-bay.vercel.app/videos/${id}`).then((respuesta) => 
    respuesta.json());
};

const actualizarCategoria = (nombre, descripcion, color, codigoSeguridad, id) => {
    return fetch(`https://fake-api-bay.vercel.app/categorias/${id}`, {
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
    return fetch(`https://fake-api-bay.vercel.app/videos/${id}`, {
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




