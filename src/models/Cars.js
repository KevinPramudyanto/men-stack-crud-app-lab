const mongoose = require("mongoose");

const CarsSchema = new mongoose.Schema(
  {
    brand: { type: String, require: true },
    country: { type: String, require: true },
  },
  { collection: "cars" }
);

module.exports = mongoose.model("Cars", CarsSchema);
