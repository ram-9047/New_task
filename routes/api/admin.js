const express = require("express");
const router = express.Router();
const Admin = require("../../models/Admin");
const jwt = require("jsonwebtoken");

// Admin Sign-up
router.post("/signup", function(req, res, next) {
  console.log(req.body, "inside admin signup route");
  Admin.create(req.body, (err, admin) => {
    if (err) return next(err);
    if (!admin)
      return res
        .status(401)
        .json({ message: "No admin found", success: false });
    return res.status(200).json({ admin, success: true });
  });
});

//Admin Sign-in
router.post("/login", function(req, res, next) {
  console.log(req.body, "inside admin login route");
  //   let email = req.body.email
  //   let password = req.body.password
  let { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err) return next(err);
    if (!admin)
      return res
        .status(400)
        .json({ message: "No admin found", success: false });
    const isAuthenticated = admin.comparePassword(password);
    if (isAuthenticated) {
      jwt.sign(
        {
          email: admin.email,
          userid: admin._id,
          username: admin.username
        },
        "mango",
        (err, token) => {
          if (err) return next(err);
          if (token) {
            res.status(200).json({
              message: "admin is logged in ",
              success: true,
              authToken: token
            });
          }
        }
      );
    } else {
      res.status(403).json({ message: "Incorrect password", success: false });
    }
  });
});
module.exports = router;
