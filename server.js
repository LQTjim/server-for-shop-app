require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app.js");
const port = process.env.port || 8080;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connect !"));

app.use("*", (req, res) => {
  res.send("routes not defined");
});

app.listen(port, () => {
  console.log(`server start at ${port}`);
});
