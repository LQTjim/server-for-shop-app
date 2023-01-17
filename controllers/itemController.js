const Item = require("./../model/itemModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.createOneItem = catchAsync(async (req, res, next) => {
  const { id, title, price, description, category, image, rating } = req.body;
  if (!id || !title || !price || !description || !category || !image) {
    return res.status(404).json();
  }
  const doc = await Item.create({
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  });

  res.status(201).json({ status: "success", data: doc });
});

exports.getAllItems = catchAsync(async (req, res, next) => {
  /* prevent user send use less query str or body*/
  if (Object.keys(req.query).length > 0 || Object.keys(req.body).length > 0) {
    return res.status(204).json();
  }
  const doc = await Item.find();

  res.status(200).json({ status: "success", results: doc.length, data: doc });
});
exports.getOneItem = catchAsync(async (req, res, next) => {
  const doc = await Item.findById(req.params.id);
  if (!doc) {
    return next(new AppError("Item not find", 400));
  }
  res.status(200).json({ status: "success", data: doc });
});
exports.updateOneItem = catchAsync(async (req, res, next) => {
  const { id, ...others } = req.body;
  console.log(id);
  //if no id => 404,  if has id but lack one of(update property) => 404
  if (!id) {
    return next(new AppError("id is needed,or lack of update data", 400));
  }
  //findOneAndUpdate(conditions(obj), update(obj),option(obj))
  const doc = await Item.findByIdAndUpdate(
    id,
    { ...others },
    //new:true return modified
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ status: "success", data: doc });
});

exports.deleteOneItem = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  const doc = await Item.findByIdAndDelete(id);
  res.status(200).json({ status: "success", data: doc });
});

exports.randomThree = catchAsync(async (req, res, next) => {
  const doc = await Item.aggregate([{ $sample: { size: 3 } }]);
  res.status(200).json({ status: "success", data: doc });
});
