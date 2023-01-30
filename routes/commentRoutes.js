const express = require("express");
const router = express.Router();
const commentController = require("./../controllers/commentController.js");
const authController = require("./../controllers/authController.js");

router
  .route("/")
  .get(commentController.getAllComment)
  .post(authController.protect, commentController.createComment);
router.route("/find-one/:id").get(commentController.findCommentByItem);
module.exports = router;
