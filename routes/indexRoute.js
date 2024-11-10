const { Router } = require("express");
const indexRoute = Router();

indexRoute.get("/", (req, res) => {
  res.send("Hello, wolrd from Node Js");
});

module.exports = indexRoute;
