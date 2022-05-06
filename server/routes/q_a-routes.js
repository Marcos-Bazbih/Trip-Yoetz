const q_aRoutes = require('express').Router();

const { getQ_A, getQ_AById, addQ_A, updateQ_A, deleteQ_A } = require('../controllers/q_a-ctrl');

q_aRoutes.get('/', getQ_A);
q_aRoutes.get('/:id', getQ_AById);
q_aRoutes.post('/:itemId', addQ_A);
q_aRoutes.put('/:id', updateQ_A);
q_aRoutes.delete('/:id', deleteQ_A);

module.exports = q_aRoutes;