var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("*", function (req, res, next) {
  console.log("inside homepage route ");
  // res.render("index", { title: "Express" });
  // res.json({ message: "hellow" });
  res.render("index");
});

module.exports = router;
