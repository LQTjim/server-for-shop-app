const catchAsync = require("./../utils/catchAsync.js");
const Comment = require("./../model/commentModel.js");
// const AppError = require("../utils/AppError.js");

exports.getAllComment = catchAsync(async (req, res, next) => {
  const doc = await Comment.find().sort({ createdAt: -1 });
  res.status(201).json({ status: "success", result: doc.length, data: doc });
});

exports.createComment = catchAsync(async (req, res, next) => {
  const doc = await Comment.create({
    comment: req.body.comment,
    item: req.body.itemId,
    user: req.user,
  });
  res.status(201).json({ status: "success", data: doc });
});

exports.findCommentByItem = catchAsync(async (req, res, next) => {
  const doc = await Comment.find({ item: req.params.id })
    .populate("user", "name")
    .sort({
      createdAt: -1,
    });
  if (doc.length === 0) {
    return res
      .status(201)
      .json({ status: "failed", message: "comment not find" });
  }
  res.status(201).json({ status: "success", data: doc });
});
