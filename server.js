import express from "express";
const app = express();

const PORT = 8000;

// connect mongodb
import { mongoConnect } from "./src/config/mongoDb.js";
mongoConnect();

// middlewares
app.use(express.json());

// API endpoints

import taskRouter from "./src/router/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({ message: "server running healthy" });
});

// open port for http request to access the server
app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
