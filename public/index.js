const path = require("path");
const express = require("express");
const app = express();

const publiDirectoryParh = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");

app.set("views engine","hbs");//telling handlebars/NODE to use handlebars for templates
app.set("views", viewsPath);//telling express to get templates from templates/views folder
app.get("", async (req, res) => {
  try{res.render("index");
  } catch (error) {
    res.status(500).send();
  }
});
app.get("/g", (req, res) => {
  res.send("G but 2");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log(__dirname)
});

//127.0.0.1:3000
