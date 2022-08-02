const express = require("express");
const routes = express.Router();
const carSpecificationModel = require("../../models/CarSpecification");


routes.get("/", async (req, res) => {
  try {
    const carSpecificationData = await carSpecificationModel.find({});
    if (carSpecificationData.length > 0) {
      res.status(200).json({ msg: "Success", data: carSpecificationData });
    } else {
      res.status(202).json({ msg: "failed", data: carSpecificationData });
    }
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

routes.post("/", async (req, res) => {
  const carDetails = {
    carName: req.body.carName,
    carModel: req.body.carModel,
    carPrice: req.body.carPrice,
    carType: req.body.carType,
    carCompany: req.body.carCompany,
  };
  if (
    !carDetails.carName ||
    !carDetails.carModel ||
    !carDetails.carPrice ||
    !carDetails.carCompany ||
    !carDetails.carType
  ) {
    res.status(500).json({ msg: "failed" });
  } else {
    const carSpecification = await new carSpecificationModel(carDetails);
    const carSpecifications = await carSpecification.save();
    // am sending data that can be optional i will remove later
    res.status(200).json({ msg: "Success", carDetails: carSpecifications });
  }
});

module.exports = routes;
