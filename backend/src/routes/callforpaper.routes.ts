import express from "express";
import CallForPaperController from "../api/CallForPaper.controller";
import AuthMiddleware from "../middleware/auth.middleware";
import { Privilege } from "../models/User";

const router = express.Router();

// http://domain.com/api/v1/callforparpers

router.get("/", CallForPaperController.getCallForPapers);
router.get("/:id", CallForPaperController.getCallForPaper);
router.post(
  "/",
  /* AuthMiddleware.authenticate,
  AuthMiddleware.authorize(Privilege.Admin), */
  CallForPaperController.createCallForPaper
);
router.delete(
  "/:id",
  /* AuthMiddleware.authenticate,
  AuthMiddleware.authorize(Privilege.Admin), */
  CallForPaperController.deleteCallForPaper
);
router.patch(
  "/:id",
  /* AuthMiddleware.authenticate,
  AuthMiddleware.authorize(Privilege.Admin), */
  CallForPaperController.updateCallForPaper
);

export default router;
