const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

//cấu hình views & view engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "hbs");

//kết nối database
const mongoose = require("mongoose");
const MobileModel = require("./models/MobileSchema");
const url = "mongodb://localhost:27017/demo";
mongoose.connect(url, { useNewUrlParser: true });

app.get("/", (req, res) => {
  MobileModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

//chạy server
app.listen(port);
