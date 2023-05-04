import express from "express";
import config from "./config/index.js";
// TODO: import router from routes/
import router from "./routes/api/nodeapi.js"
import cors from "cors"
// import path from "path";

const app = express();

app.use(cors());

app.use(express.json());
// app.use(express.static(path.join(__dirname, "./public")))

// TODO: use the imported router to handle all requests
app.use("/api", router);


app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});