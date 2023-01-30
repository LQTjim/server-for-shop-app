const catchAsync = require("./../utils/catchAsync.js");

const Item = require("./../model/itemModel.js");
const AppError = require("../utils/appError.js");

exports.order = catchAsync(async (req, res, next) => {
  // const now = new Date();
  // const end = new Date();
  // console.log(end - now);

  const orderDetail = [];

  req.body.map((el) => {
    //price is send but never use here
    if (Object.getOwnPropertyNames(el).toString() !== "itemId,quantity,price") {
      return next(new AppError("Valid order,please try again", 400));
    }
    orderDetail.push(el);
  });

  //[{ itemId: 'asdf111', quantity: 1 },{ itemId: 'asdf1333', quantity: 3 },{ itemId: 'asdf111', quantity: 122 }]
  //avoid situation above(repeat itemId)
  const seen = new Set();
  if (
    orderDetail.some((curr) => {
      seen.size === seen.add(curr.itemId).size;
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
      return Item.findById(el.itemId)
        .then((r) => {
          if (!r) {
            return next(new AppError("item not find", 400));
          }
          return r;
        })
        .catch(() => {
          next(new AppError("item not find", 400));
        });
    })
  );

  const eachPrice = promise.map((el, i) => {
    return (el?.price * 100 * orderDetail[i]["quantity"]) / 100;
  });
  const totalPrice = eachPrice.reduce((a, c) => {
    return (a * 100 + c * 100) / 100;
  });

  res.status(200).json({
    status: "success",
    message: "Order receive",
    account: "ABC123456789",
    orderDetail,
    totalPrice,
  });
});
