const mongoose = require("mongoose");
const url =
  "mongodb+srv://waqas:waqas123@cluster0.i52c5.mongodb.net/gm_wheels?retryWrites=true&w=majority";

const connectedDb = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
if (connectedDb) {
  console.log("database connected");
} else {
  console.log("database not connected");
}

module.exports = connectedDb;
