const express = require("express");
const app = express();
const { Router } = require("express");
const indexRoute = Router();
const path = require("node:path");

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

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

indexRoute.get("/", (req, res) => {
  res.render("index.ejs", { title: "Mini Message Board", messages: messages });
});

module.exports = indexRoute;
