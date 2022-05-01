const commentsRoutes = require('express').Router();

const { addComment, getComments, getCommentById, updateComment, deleteComment } = require('../controllers/comment-controller');

commentsRoutes.get('/', getComments);
commentsRoutes.get('/:id', getCommentById);
commentsRoutes.post('/:itemId', addComment);
commentsRoutes.put('/:id', updateComment);
commentsRoutes.delete('/:id', deleteComment);

module.exports = commentsRoutes;