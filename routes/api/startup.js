var express = require("express");
var router = express.Router();

let AddStartup = require("../../models/AddStartup");

/* GET home page. */

router.post("/addStartup", function (req, res, next) {
  console.log("inside add start up route");
  console.log(req.body);
  AddStartup.create(req.body, (err, createdStartup) => {
    if (err) {
      return next(err);
    }
    if (!createdStartup) {
      return res
        .status(400)
        .json({ message: "Please Try Again", success: false });
    }
    if (createdStartup) {
      console.log(createdStartup, "startup added");
      return res.status(200).json({ createdStartup, success: true });
    }
  });
});

router.get("/", function (req, res, next) {
  console.log("inside homepage route ");
  AddStartup.find((err, list) => {
    if (err) return next(err);
    if (!list) {
      return res.json({ message: "No Start-up found", success: false });
    }
    res.json({ list, success: true });
  });
});

module.exports = router;
