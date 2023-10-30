const {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const router = require("express").Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
