const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, Date.now() + file.fieldname + ".jpeg");
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    // welcome 
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
