const express = require("express");
const app = express();
const { Router } = require("express");
const newRoute = Router();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

newRoute.get("/", (req, res) => {
  res.render("form.ejs");
});

module.exports = newRoute;
