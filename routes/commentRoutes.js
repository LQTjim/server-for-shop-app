const express = require("express");
const router = express.Router();
const commentController = require("./../controllers/commentController");
const authController = require("./../controllers/authController");

router
  .route("/")
  .get(commentController.getAllComment)
  .post(authController.protect, commentController.createComment);
router.route("/find-one/:id").get(commentController.findCommentByItem);
module.exports = router;
