const express = require("express");
const app = express();
const { Router } = require("express");
const indexRoute = Router();
const path = require("node:path");
const bodyParser = require("body-parser");

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

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

indexRoute.get("/", (req, res) => {
  res.render("index.ejs", { title: "Mini Message Board", messages: messages });
});

indexRoute.post("/new", (req, res) => {
  const usr = req.body.name;
  const msg = req.body.message;

  if (usr && msg) {
    messages.push({ text: msg, user: usr, added: new Date() });
    res.redirect("/");
  } else {
    res.status(400).send("Name and message are required!");
  }
});

module.exports = indexRoute;
