import express from 'express';
import UserController from '../api/user.controller';

const router = express.Router();

// http://domain.com/api/v1/users/

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);

export default router;