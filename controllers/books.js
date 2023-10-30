const Book = require("../models/books");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.status(StatusCodes.OK).json({ data: books, total: books.length });
};

const createBook = async (req, res) => {
  const book = await Book.create(req.body);

  res.status(StatusCodes.CREATED).json({ data: book });
};

const getBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOne({ _id: bookId });
  if (!book) {
    throw new CustomError.NotFoundError(`No book found with id : ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ data: book });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndUpdate({ _id: bookId }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!book) {
    throw new CustomError.NotFoundError(`No book found with id : ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ data: book });
};

const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOneAndDelete({ _id: bookId });

  if (!book) {
    throw new CustomError.NotFoundError(`No book found with id : ${bookId}`);
  }

  res.status(StatusCodes.OK).json({ data: "Book removed successfully" });
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  getBook,
  deleteBook,
};
