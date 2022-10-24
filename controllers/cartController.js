const catchAsync = require("./../utils/catchAsync");

const Item = require("./../model/itemModel");
const AppError = require("../utils/AppError");

exports.order = catchAsync(async (req, res, next) => {
  // const now = new Date();
  // const end = new Date();
  // console.log(end - now);

  const orderDetail = [];

  req.body.map((el) => {
    if (Object.getOwnPropertyNames(el).toString() !== "itemId,quantity") {
      return next(new AppError("Valid order,please try again", 400));
    }
    return orderDetail.push(el);
  });
  //[{ itemId: 'asdf111', quantity: 1 },{ itemId: 'asdf1333', quantity: 3 },{ itemId: 'asdf111', quantity: 122 }]
  //avoid situation above
  const seen = new Set();
  if (
    orderDetail.some((curr) => {
      return seen.size === seen.add(curr.itemId).size;
    })
  ) {
    return next(new AppError("Valid order,please try again", 400));
  }
  orderDetail.map((el) => {
    if (!Number.isInteger(el.quantity)) {
      return next(new AppError("Valid order,please try again", 400));
    }
  });

  const promise = await Promise.all(
    orderDetail.map(async (el) => {
      return Item.findById(el.itemId).catch((e) => {
        throw e;
      });
    })
  );

  const eachPrice = promise.map((el, i) => {
    return (el?.price * 100 * orderDetail[i]["quantity"]) / 100;
  });
  const totalPrice = eachPrice.reduce((a, c) => {
    return (a * 100 + c * 100) / 100;
  });

  res
    .status(200)
    .json({ status: "success", total: totalPrice, message: "Order receive" });
});
