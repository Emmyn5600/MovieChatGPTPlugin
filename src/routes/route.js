import express from "express";

import {
  fetchAllMovies,
  fetchByMovieId,
  getTopRatedMovies,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/movies", fetchAllMovies);
router.get("/movies/:id", fetchByMovieId);
router.get("/topMovies", getTopRatedMovies);

export default router;
