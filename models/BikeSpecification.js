const mongoose = require("mongoose");

const bikeSpecificationSchema = mongoose.Schema({
  bikeName: {
    type: String,
    required: true,
  },
  bikeModel: {
    type: Number,
    required: true,
  },
  bikePrice: {
    type: Number,
    required: true,
  },
  bikeType: {
    type: String,
    required: true,
  },
  bikeCompany: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:false
  }
});



const bikeSpecificationModel = new mongoose.model(
  "bikecatagory",
  bikeSpecificationSchema
);
module.exports = bikeSpecificationModel;
