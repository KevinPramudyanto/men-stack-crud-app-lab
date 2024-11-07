require("dotenv").config();
const express = require("express");
const cars = require("./src/routers/cars");
const connectDB = require("./src/db/db");

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", cars);

app.listen(5001);
