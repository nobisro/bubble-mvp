const express = require("express");
const app = express();
const path = require("path");
// const routes = require("./routes");
const db = require("../database/index.js");
const Bubble = require("../database/bubble.js");

const PORT = 1337;

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../dist"));
});

app.get("/api/post", (req, res) => {
  Bubble.create(req.body).then(() => {
    console.log("bubble created");
    db.disconnect();
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
