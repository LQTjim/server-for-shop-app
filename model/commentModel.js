const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    maxLength: 100,
    required: [true, "Comment is required."],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: ["Comment is belong to user."],
  },
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "Item",
    required: ["Comment is belong to user item."],
  },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
