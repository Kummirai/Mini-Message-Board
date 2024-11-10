const { Router } = require("express");
const newRoute = Router();

newRoute.get("/", (req, res) => {
  res.send("This is a new route");
});

module.exports = newRoute;
