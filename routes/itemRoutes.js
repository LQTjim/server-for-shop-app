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
//這個route放在前面會block其他東西,使用param最好搭配固定的詞
//router.route("/:id").get(itemController.getOneItem);
router.route("/get-one/:id").get(itemController.getOneItem);

module.exports = router;
