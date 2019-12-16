const path = require("path");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Gay");
});
app.get("/gay", (req, res) => {
  res.send("Gay but 2");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

//127.0.0.1:3000
