const mongoose = require("mongoose");

var MobileSchema = mongoose.Schema({
  name: String,
  brand: String,
});

var MobileModel = mongoose.model("mobile", MobileSchema, "mobile");

module.exports = MobileModel;
