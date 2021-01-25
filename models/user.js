const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required:true,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    default: ""
  },
  password: {
    type: String,
    required:true
  },
  favcats: { 
    type : Array , 
    default : [] 
  }
});

module.exports = mongoose.model("user", userSchema);