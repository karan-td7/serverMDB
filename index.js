import express from "express";
import mongoose from "mongoose";
import routes from "./src/routes.js";
import chalk from "chalk";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use("/", routes);

mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log(chalk.bgBlackBright("Database connected"));

  app.listen(PORT, () => {
    console.log(
      chalk.blue.italic(`Server running at http://localhost:${PORT}/`)
    );
  });
});

mongoose.connection.on("error", (err) => {
  console.error(chalk.red.bold("Error connecting to MongoDB"), err);
});
