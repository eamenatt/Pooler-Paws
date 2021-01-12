const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  details: { String, required: true },
  picture: {
    type: String,
    get: v => `${root}${v}`
  },
  availability: { type: Date, default: Date.now }
});

const Cat = mongoose.model("Cat", catSchema);

const doc = new Cat({ name: 'Val', picture: '/123.png' });
doc.picture; // 'https://s3.amazonaws.com/mybucket/123.png'
doc.toObject({ getters: false }).picture; // '/123.png'

module.exports = Cat;
