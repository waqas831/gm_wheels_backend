const express = require("express");
const router = express.Router();
const UserModel = require("../../models/User");
const upload = require("../../middleware/fileStorage");
const jwt=require('jsonwebtoken');

router.get("/log", (req, res) => {
  res.send("welcome");
});

router.post("/login", async (req, res) => {
  try {
    const userLoginCredientials = {
      password: req.body.password,
      email: req.body.email,
    };
    if (!userLoginCredientials.password || !userLoginCredientials.email) {
      res.status(400).json({ msg: "invalid Data" });
    } else {
      const userExist = await UserModel.findOne({
        email: userLoginCredientials.email,
      });
      console.log(userExist);
      if (userExist) {
        if (userExist.password == userLoginCredientials.password) {
     
          const generateUserToken=jwt.sign({
            userId:userExist._id,
            email:userExist.email
          },process.env.SECRET_KEY);
          res.status(200).json({msg:'Success',data:userExist,token:generateUserToken})

        } else {
          res.status(402).json({ msg: "invalid credientials" });
        }
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

router.post("/", upload.single("profile"), async (req, res) => {
  try {
    const userDetails = {
      name: req.body.name,
      fname: req.body.fname,
      password: req.body.password,
      email: req.body.email,
      profile: req.file.filename,
      phone: req.body.phone,
    };
    if (
      !userDetails.name ||
      !userDetails.fname ||
      !userDetails.password ||
      !userDetails.email ||
      !userDetails.profile ||
      !userDetails.phone
    ) {
      res.status(401).json({ msg: "Invalid Data" });
    } else {
      const addUser = new UserModel(userDetails);
      const user = await addUser.save();
      if (user) {
        res.status(200).json({ msg: "Success", data: user });
      } else {
        res.status(200).json({ msg: "failed" });
      }
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

module.exports = router;
