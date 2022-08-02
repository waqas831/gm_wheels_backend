require("./database/db");
const express = require("express");
const port = 8080;
const bodyParser = require("body-parser");
const app = express();
const carRoutes = require("./routes/cars/cars");
const bikeRoutes = require("./routes/bikes/bike");
const userRoutes=require('./routes/users/user');
var cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/car", carRoutes);
app.use("/api/bike", bikeRoutes);

app.get("/", (req, res) => {
  res.status(200).json("hello world");
});





app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is running on port ${port}`);
});
