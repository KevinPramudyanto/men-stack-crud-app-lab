const Cars = require("../models/Cars");

const postCar = async (req, res) => {
  try {
    await Cars.create(req.body);
    res.json({ status: "ok", msg: "car created" });
  } catch (error) {
    console.error(error.message);
  }
};

const getCars = async (req, res) => {
  try {
    const cars = await Cars.find();
    res.json(cars);
  } catch (error) {
    console.error(error.message);
  }
};

const getCar = async (req, res) => {
  try {
    const cars = await Cars.findById(req.params.id);
    res.json(cars);
  } catch (error) {
    console.error(error.message);
  }
};

const putCar = async (req, res) => {
  try {
    await Cars.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: "ok", msg: "car updated" });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteCar = async (req, res) => {
  try {
    await Cars.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "car deleted" });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { postCar, getCars, getCar, putCar, deleteCar };
