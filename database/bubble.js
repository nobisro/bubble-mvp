const mongoose = require("mongoose");
const db = require("./index.js");

const bubbleSchema = new mongoose.Schema(
  {
    body: String,
    color: String
  },
  { timestamps: true }
);

const Bubble = mongoose.model("Bubble", bubbleSchema);

module.exports = Bubble;
