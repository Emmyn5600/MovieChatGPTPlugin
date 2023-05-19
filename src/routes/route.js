import express from "express";

import { fetchAllMovies, fetchByMovieId } from "../controllers/controller.js";

const router = express.Router();

router.get("/movies", fetchAllMovies);
router.get("/movies/:id", fetchByMovieId);

export default router;
