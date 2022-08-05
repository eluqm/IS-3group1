import express from 'express';
import UserController from '../api/user.controller';
import AuthMiddleware from '../middleware/auth.middleware';
import { Privilege } from '../models/User';

const router = express.Router();

// http://domain.com/api/v1/users/

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/', AuthMiddleware.authenticate, AuthMiddleware.authorize(Privilege.Admin), UserController.createUser);
router.delete('/:id', AuthMiddleware.authenticate, AuthMiddleware.authorize(Privilege.Admin, Privilege.Self), UserController.deleteUser);
router.patch('/:id', AuthMiddleware.authenticate, AuthMiddleware.authorize(Privilege.Admin, Privilege.Self), UserController.updateUser);

export default router;
