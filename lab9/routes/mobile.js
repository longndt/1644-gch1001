const express = require("express");
const MobileModel = require("../models/MobileSchema");
const router = express.Router();

router.get("/", (req, res) => {
  MobileModel.find((err, data) => {
    if (!err) {
      res.render("mobile/index", { mobiles: data });
    }
  });
});

router.get("/api", (req, res) => {
  MobileModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  });
});

router.get("/add", (req, res) => {
  res.render("mobile/add");
});

router.post("/add", (req, res) => {
  var mobile = new MobileModel(req.body);
  mobile.save((err) => {
    if (!err) {
      console.log("Add mobile succeed !");
      res.redirect("/mobile");
    }
  });
});

router.get("/detail/:id", (req, res) => {
  //lấy giá trị id của document gửi từ url
  var mobile_id = req.params.id;
  //tìm kiếm document trong collection theo id
  MobileModel.findById(mobile_id, (err, data) => {
    if (!err) {
      //render ra file detail chứa dữ liệu của document
      res.render("mobile/detail", { mobile: data });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  MobileModel.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      console.log("Delete mobile succeed !")
      res.redirect("/mobile")
    }
  })
})

router.get("/edit/:id", (req, res) => {
   MobileModel.findById(req.params.id, (err, data) => {
     if (!err) {
        res.render("mobile/edit", { mobile: data })
     }
   })
})

router.post("/edit/:id", (req, res) => {
    MobileModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (!err) {
        console.log("Edit mobile succeed !")
        res.redirect("/mobile")
      }
    })
})

module.exports = router;
