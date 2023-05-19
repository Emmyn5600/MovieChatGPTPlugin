import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import movieRoutes from "./routes/route.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Get the list of movies using a Plugin");
});

app.get("/chatgpt/.well-known/ai-plugin.json", (req, res) => {
  const filePath = path.join(__dirname, "/chatgpt/.well-known/ai-plugin.json");

  res.sendFile(filePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({
        msg: "error sending file",
      });
    } else {
      console.log("Sent:", filePath);
    }
  });
});

app.get("/chatgpt/openai.yaml", (req, res) => {
  const filePath = path.join(__dirname, "/chatgpt/openai.yaml");

  res.sendFile(filePath, function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({
        msg: "error sending file",
      });
    } else {
      console.log("Sent:", filePath);
    }
  });
});


app.use("/api/v1", movieRoutes);

app.listen(5000, () => {
  console.log(`🚀 Server is ready at http://localhost:5000`);
});
