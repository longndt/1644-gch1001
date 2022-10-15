var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
//khai báo router
var mobileRouter = require("./routes/mobile");
var laptopRouter = require("./routes/laptop");

var app = express();

//cấu hình mongoose (database)
var mongoose = require("mongoose");
var db =
  "mongodb+srv://longndt:xdHB48B3Fv*%40TPa@cluster0.i5kings.mongodb.net/greenwich";
mongoose.connect(db, { useNewUrlParser: true });

//cấu hình body-parser (form input)
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//sử dụng router
app.use("/mobile", mobileRouter);
app.use("/laptop", laptopRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});

module.exports = app;
