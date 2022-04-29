const commentsRoutes = require('express').Router();

const { addComment, getComments } = require('../controllers/comment-controller');

commentsRoutes.get('/', getComments);
commentsRoutes.post('/:itemId', addComment);

module.exports = commentsRoutes;