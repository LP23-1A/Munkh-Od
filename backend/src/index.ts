import express from "express";
import { connectDatabase } from "./utils/database";

const PORT = 8000;

const start = () => {
  const app = express();

  connectDatabase();

  app.get("/", (reg, res) => {
    res.status(200).send({ success: true, msg: "Hello world" });
  });

  app.listen(PORT, () => {
    console.log("Server is running");
  });
};

start();
