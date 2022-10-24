const fs = require("fs");
const mongoose = require("mongoose");
require("dotenv").config();
const Item = require("../model/itemModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connect !"))
  .catch((err) => console.log(err));

const items = JSON.parse(fs.readFileSync(`${__dirname}/items.json`, "utf-8"));

const importData = async () => {
  try {
    await Item.create(items);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Item.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
