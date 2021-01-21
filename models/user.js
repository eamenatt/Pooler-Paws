const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required:true,
    unique: true
  },
  email: {
    //This is the user's email
    type: String,
    unique: true,
    required: true,
    default: ""
  },
  password: {
    type: String,
    required:true
  },
  cat: [{ type: Schema.Types.ObjectId, ref: 'Cats' }]
});

module.exports = mongoose.model("user", userSchema);