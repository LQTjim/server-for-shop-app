const express = require("express");
const router = express.Router();

const test = async (req, res, next) => {
  res.status(401).json({ status: "failed" });
};

router.get("/", test);
router.post("/:a", test);

module.exports = router;
