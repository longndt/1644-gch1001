const mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  image: String,
  address: String,
  //Note: các thuộc tính "name", "email" ,.. là các cột trong bảng
});

var studentModel = mongoose.model("Sinh Vien", StudentSchema, "student");
//Note: "student" là tên của bảng (collection)

module.exports = studentModel;
