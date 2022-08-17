import express from "express";
import UserController from "../api/user.controller";
import AuthMiddleware from "../middleware/auth.middleware";

const router = express.Router();

router.get("/profile", AuthMiddleware.authenticate, UserController.getProfile);

export default router;
