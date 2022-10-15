const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  var name = "Laptop Router";
  res.render("index", { data: name });
});

module.exports = router;
