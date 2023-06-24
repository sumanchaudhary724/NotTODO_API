import dotenv from "dotenv";
import express from "express";
const app = express();
import cors from "cors";
const PORT = 8000;
import path from "path";
dotenv.config();

const __dirname = path.resolve();
console.log(__dirname);

// connect mongodb
import { mongoConnect } from "./src/config/mongoDb.js";
mongoConnect();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/build"));

// API endpoints
import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// open port for http request to access the server
app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
