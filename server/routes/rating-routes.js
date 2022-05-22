const ratingsRoutes = require('express').Router();

const { getRatings, getRatingById, addRating, updateRating, deleteRating } = require('../controllers/rating-ctrl');

ratingsRoutes.get('/', getRatings);
ratingsRoutes.get('/:id', getRatingById);
ratingsRoutes.post('/:itemId', addRating);
ratingsRoutes.put('/:id', updateRating);
ratingsRoutes.delete('/:id', deleteRating);

module.exports = ratingsRoutes;