const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
  age: Number,
  email: { type: String, required: true },
  image: { type: String },
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
