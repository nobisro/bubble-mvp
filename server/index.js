const express = require("express");
const app = express();
const path = require("path");

const PORT = 1337;

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
