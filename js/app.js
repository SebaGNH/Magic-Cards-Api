'use strict'

const cargarApi = async () => {
    try{
        const respuesta = await fetch(`https://api.magicthegathering.io/v1/cards`);
        //console.log(respuesta); /* clg <-- Verificar conección ok */

        const datos = await respuesta.json();
        console.log(datos);

    }catch(error){
        console.log(error); 
    }
}
cargarApi();