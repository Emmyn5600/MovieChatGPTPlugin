import express from "express";
import cors from "cors";
import movieRoutes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/v1", movieRoutes);

export default app;