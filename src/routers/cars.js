const express = require("express");
const router = express.Router();
const {
  postCar,
  getCars,
  getCar,
  putCar,
  deleteCar,
} = require("../controllers/cars");

router.post("/cars", postCar);
router.get("/cars", getCars);
router.get("/cars/:id", getCar);
router.put("/cars/:id", putCar);
router.delete("/cars/:id", deleteCar);

module.exports = router;
