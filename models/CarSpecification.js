const mongoose = require("mongoose");
const carSpecificationSchema = mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: Number,
    required: true,
  },
  carPrice: {
    type: Number,
    required: true,
  },
  carType: {
    type: String,
    required: true,
  },
  carCompany: {
    type: String,
    required: true,
  },
});

const carSpecificationModel = new mongoose.model(
  "carcatagory",
  carSpecificationSchema
);
module.exports = carSpecificationModel;
