const { Type } = require("../db");
// const axios = require("axios");
// require("dotenv").config();

// const { URLtype } = process.env;

// const getTypesFromAPI = async () => {
//     try {
//         const responseAPI = await axios.get(`${URLtype}`);
//         return responseAPI.data;
//     }
//     catch (error) {
//         console.error("Error al obtener types", error.messages);
//         throw error;
//     }
// }

// const typesApiGoDB = async () => {
//     try {
//         const typesApi = await getTypesFromAPI();
//         const arrTypes = typesApi.results;

//         await Promise.all(arrTypes.map(async (typeIndividual) => {
//             try {
//                 // Utilizar el name del objeto para crear el registro en la base de datos
//                 const createdType = await Type.create({ name: typeIndividual.name });
//                 console.log(`Tipo creado: ${createdType.name}`);
//             } catch (error) {
//                 console.error(`Error al crear tipo ${typeIndividual.name}:`, error);
//             }
//         }));

//         console.log("Guardado correctamente");
//     } catch (error) {
//         console.error("Error al guardar types", error.messages);
//         throw error;
//     }
// }

const getTypesDB = async () => {
    const typesDB = await Type.findAll()
    return typesDB
}


module.exports = {
    // typesApiGoDB
    getTypesDB
}