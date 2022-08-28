import express from "express";
import SearchController from "../api/search.controller";

const router = express.Router();

router.get("/", SearchController.search);
router.get("/topics", SearchController.topics);
router.get("/locations", SearchController.locations);
export default router;
