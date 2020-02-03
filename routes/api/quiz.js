const express = require("express");
const router = express.Router();
const Quiz = require("../../models/Question.js");
const { verifyAdmin } = require("../../modules/auth");

// router.use(verifyAdmin);
//get all quizes

router.get("/", function(req, res, next) {
  console.log("quiz here");
  Quiz.find((err, quiz) => {
    if (err) return next(err);
    if (!quiz) return res.json({ message: "no quiz found", success: false });
    res.json({ quiz, success: true });
  });
});

//get single quiz

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findById(id, (err, quiz) => {
    if (err) return next(err);
    res.json(quiz);
  });
});

//create quiz

router.post("/create", function(req, res, next) {
  console.log(req.body, "inside crate quiz route");
  Quiz.create(req.body, (err, createdQuiz) => {
    if (err) return next(err);
    if (!createdQuiz) {
      return res.status(400).json({ message: "no quiz found", success: false });
    }
    if (createdQuiz) {
      console.log(createdQuiz, "created quiz");
      res.status(200).json({ createdQuiz, success: true });
    }
  });
});

//edit quiz

router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  Quiz.findByIdAndUpdate(id, req.body, { new: true }, (err, editedQuiz) => {
    if (err) return next(err);
    if (!editedQuiz)
      return res.status(400).json({ message: "no quiz found", success: false });
    res.status(200).json({ editedQuiz, success: true });
  });
});

//delete quiz

router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  Quiz.findByIdAndRemove(id, req.body, (err, deleteQuiz) => {
    console.log(deleteQuiz, "delete item");
    if (err) return next(err);
    if (!deleteQuiz)
      return res.status(400).json({ message: "no quiz found", success: false });
    if (deleteQuiz) return res.status(200).json({ deleteQuiz, success: true });
  });
});

module.exports = router;
