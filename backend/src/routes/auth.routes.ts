import express from 'express';
import AuthController from '../api/auth.controller';

const router = express.Router();

// http://domain.com/api/v1/auth/

router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);

export default router;
