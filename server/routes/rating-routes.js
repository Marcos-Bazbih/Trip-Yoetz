const ratingsRoutes = require('express').Router();

const { getRatings, getRatingById, addRating, updateRating, deleteRating, getRatingsByItemId } = require('../controllers/rating-ctrl');

ratingsRoutes.get('/', getRatings);
ratingsRoutes.get('/:id', getRatingById);
ratingsRoutes.get('/itemRatings/:itemId', getRatingsByItemId);
ratingsRoutes.post('/:itemId', addRating);
ratingsRoutes.put('/:id', updateRating);
ratingsRoutes.delete('/:id', deleteRating);

module.exports = ratingsRoutes;