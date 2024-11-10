const express = require("express");
const indexRoute = require("./routes/indexRoute");
const newRoute = require("./routes/newRoute");

const app = express();
const port = process.env.port || 3000;

app.use("/", indexRoute);
app.use("/new", newRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
