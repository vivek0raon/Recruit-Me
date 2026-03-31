import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDB } from "./lib/db.js";
const __dirname = path.resolve();

const app = express();

console.log(ENV.PORT);

// app.get("/", (req, res) => {
//   res.status(200).json({ msg: "Backend API is running" });
// });

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "success from api book" });
});
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api health" });
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is running on port:", ENV.PORT);
    });
  } catch {
    console.error("💥 Error starting the server");
  }
};

startServer();
