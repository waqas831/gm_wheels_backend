const express = require("express");
const routes = express.Router();
const bikeSpecificationModel = require("../../models/BikeSpecification");
const upload=require('../../middleware/fileStorage');

routes.get("/", async (req, res) => {
  try {
    const bikeSpecificationData = await bikeSpecificationModel.find({});
    console.log(bikeSpecificationData);
    if (bikeSpecificationData.length > 0) {
      res.status(200).json({ msg: "Success", data: bikeSpecificationData });
    } else {
      res.status(202).json({ msg: "failed", data: bikeSpecificationData });
    }
  } catch (error) {
    res.status(404).json({ msg: error });
  }
});

routes.post("/",upload.single('image'), async (req, res) => {
  const bikeDetails = {
    bikeName: req.body.bikeName,
    bikeModel: req.body.bikeModel,
    bikePrice: req.body.bikePrice,
    bikeType: req.body.bikeType,
    bikeCompany: req.body.bikeCompany,
    image:req.file.filename
  };
  console.log(bikeDetails);
  if (
    !bikeDetails.bikeName ||
    !bikeDetails.bikeModel ||
    !bikeDetails.bikePrice ||
    !bikeDetails.bikeCompany ||
    !bikeDetails.bikeType
  ) {
    res.status(400).json({ msg: "failed" });
  } else {
    const bikeSpecification = await new bikeSpecificationModel(bikeDetails);
    const bikeSpecifications = await bikeSpecification.save();
    // am sending data that can be optional i will remove later
    res.status(200).json({ msg: "Success", bikeDetails: bikeSpecifications });
  }
});

module.exports = routes;
