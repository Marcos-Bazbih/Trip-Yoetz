const dataRoutes = require('express').Router();

const { getAllDataByCity } = require("../controllers/data-ctrl");

dataRoutes.get("/:city", getAllDataByCity);

module.exports = dataRoutes;