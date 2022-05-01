const hotelsRoutes = require("express").Router();

const { getHotels, getHotelById, updateHotel, deleteHotel, addHotel } = require("../controllers/hotel-ctrl");

hotelsRoutes.get("/", getHotels);
hotelsRoutes.get("/:id", getHotelById);
hotelsRoutes.post("/", addHotel);
hotelsRoutes.put("/:id", updateHotel);
hotelsRoutes.delete("/:id", deleteHotel);

module.exports = hotelsRoutes;