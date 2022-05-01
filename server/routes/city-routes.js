const citiesRoutes = require("express").Router();

const { getCities, getCityByName, addCity, updateCity, deleteCity } = require("../controllers/city-ctrl");

citiesRoutes.get("/", getCities);
citiesRoutes.get("/:name", getCityByName);
citiesRoutes.post("/", addCity);
citiesRoutes.put("/:id", updateCity);
citiesRoutes.delete("/:id", deleteCity);

module.exports = citiesRoutes;