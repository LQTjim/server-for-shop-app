const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const doc = await User.find();

  res.status(200).json({ status: "success", results: doc.length, data: doc });
});

//this one just for test could I handle routes in seperate routes not actuall use
exports.handleUserRoutes = catchAsync(async (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in user routes`, 404));
});
