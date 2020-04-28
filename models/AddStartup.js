const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StartupNameSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StartupName", StartupNameSchema);
