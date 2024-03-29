const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController.js");
const userController = require("./../controllers/userController.js");

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/loginWithJWT").post(authController.loginWithJWT);

router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin"),
    userController.getAllUsers
  );

module.exports = router;
