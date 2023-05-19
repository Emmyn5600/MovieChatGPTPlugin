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
