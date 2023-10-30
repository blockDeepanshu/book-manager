const mongoose = require("mongoose");

const BookSchmema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      minLength: 5,
      maxLength: 20,
    },

    author: {
      type: String,
      required: [true, "Book author is required"],
    },
    summary: {
      type: String,
      required: [true, "Book summary is required"],
      minLength: 10,
      maxLength: 200,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchmema);
