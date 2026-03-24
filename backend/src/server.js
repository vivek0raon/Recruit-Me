import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";

const app = express();

console.log(ENV.PORT);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "success from api 4000" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api health" });
});
app.listen(ENV.PORT, () => console.log("server is running on port", ENV.PORT));
