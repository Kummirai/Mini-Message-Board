const { Router } = require("express");
const indexRoute = Router();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

const messages = [
  {
    text: "Hi, there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello, world",
    user: "Charles",
    added: new Date(),
  },
];

indexRoute.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRoute;
