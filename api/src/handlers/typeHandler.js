const { getTypesDB } = require("../controllers/typeControllers.js");

const getTypesHandler = async (req, res) => {
    try{ 
        const typesApi = await getTypesDB();
        return res.status(200).json(typesApi);
    }
    catch (error) {
       return res.status(500).send("Guardado de types fracaso");
    }
}

module.exports = {
    getTypesHandler
}