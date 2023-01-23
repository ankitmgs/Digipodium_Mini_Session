const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("Users", schema);

module.exports = model;
