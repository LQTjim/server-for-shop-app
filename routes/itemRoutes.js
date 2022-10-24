const express = require("express");
const router = express.Router();

const itemController = require("./../controllers/itemController");
const authController = require("./../controllers/authController");
const cartController = require("./../controllers/cartController");
router
  .route("/")
  .get(itemController.getAllItems)
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    itemController.createOneItem
  )
  .patch(
    authController.protect,
    authController.restrictTo("admin"),
    itemController.updateOneItem
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin"),
    itemController.deleteOneItem
  );
router.route("/random-three").get(itemController.randomThree);
router.route("/order").post(authController.protect, cartController.order);

module.exports = router;
