const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    //required:true,
    unique: true
  },
  email: {
    //This is the user's email
    type: String,
    unique: true,
    default: ""
  },
  password: {
    type: String,
    required:true
  },
  inventory: [{ type: Schema.Types.ObjectId, ref: 'Inventory' }]
});

module.exports = mongoose.model("user", userSchema);