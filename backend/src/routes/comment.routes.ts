import express from 'express';
import CommentController from '../api/comment.controller';
import AuthMiddleware from '../middleware/auth.middleware';
import { Privilege } from '../models/User';

const router = express.Router();

router.get('/all',CommentController.getAllComments);
router.get('/',AuthMiddleware.authenticate,CommentController.getUserComments);
router.get('/:idevent',CommentController.getEventComments);
router.post('/:idevent',AuthMiddleware.authenticate,CommentController.createComment);
router.delete('/:id',AuthMiddleware.authenticate,CommentController.deleteComment);
router.patch('/:id',AuthMiddleware.authenticate,CommentController.editComment);

export default router;