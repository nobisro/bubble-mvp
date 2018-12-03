const express = require("express");
const app = express();
const path = require("path");
// const routes = require("./routes");
const db = require("../database/index.js");
const Bubble = require("../database/bubble.js");
const bodyParser = require("body-parser");

app.use(bodyParser());

const PORT = 1337;

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/api/bubbles", (req, res) => {
  //get the bubbles
  //send the bubbles
  Bubble.find()
    .exec()
    .then(bubbles => {
      console.log("bubbles queried successfully");
      res.send(bubbles);
    });
});

app.post("/api/bubbles", (req, res) => {
  let bubble = req.body;
  Bubble.create(bubble).then(() => {
    console.log("bubble created");
    db.disconnect();
  });
});

app.delete("/api/bubbles", (req, res) => {
  Bubble.deleteMany({})
    .exec()
    .then(() => {
      console.log("deleted all bubbles");
    });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
