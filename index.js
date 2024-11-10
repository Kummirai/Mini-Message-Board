const express = require("express");
const path = require("node:path");
const indexRoute = require("./routes/indexRoute");
const newRoute = require("./routes/newRoute");

const app = express();
const port = process.env.port || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

app.use("/", indexRoute);
app.use("/new", newRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
