const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    }
});

const UserModel = new mongoose.model(
    "users",
    UserSchema
  );
  module.exports = UserModel;