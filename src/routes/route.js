import express from "express";

import { fetchAllMovies } from "../controllers/controller.js";

const router = express.Router();

router.get("/movies", fetchAllMovies);

export default router;
