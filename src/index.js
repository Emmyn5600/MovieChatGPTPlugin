import express from "express";
import cors from "cors";
import movieRoutes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", movieRoutes);

app.listen(5000, () => {
  console.log(`🚀 Server is ready at http://localhost:5000`);
});
