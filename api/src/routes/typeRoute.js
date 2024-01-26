const { Router } = require('express');

const { getTypesHandler } = require("../handlers/typeHandler.js");

const typeRoute = Router();

typeRoute.get("/", getTypesHandler);

module.exports = {
    typeRoute
}