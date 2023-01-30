const User = require("./../model/userModel.js");
const catchAsync = require("./../utils/catchAsync.js");
const AppError = require("./../utils/AppError.js");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const doc = await User.find();

  res.status(200).json({ status: "success", results: doc.length, data: doc });
});

//this one just for test could I handle routes in seperate routes not actuall use
//this not work
exports.handleUserRoutes = catchAsync(async (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} in user routes`, 404));
});
