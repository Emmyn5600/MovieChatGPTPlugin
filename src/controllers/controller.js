import axios from "axios";

export const fetchAllMovies = async (req, res) => {
  try {
    const response = await axios.get("https://dummyapi.online/api/movies");
    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      res.staus(400).json(error.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const fetchByMovieId = async (req, res) => {
  try {
    const movieId = req.params.id;
    const response = await axios.get(
      `https://dummyapi.online/api/movies/${movieId}`
    );
    res.status(200).json(response.data);
  } catch (err) {
    if (err.response) {
      res.status(400).json(err.response.data);
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

export const getTopRatedMovies = async (req, res) => {
  try {
    const response = await axios.get("https://dummyapi.online/api/movies");
    const movies = response.data.filter((movie) => movie.rating >= 9);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};
