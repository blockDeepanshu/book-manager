# Book Management RESTful API

This is a Node.js RESTful API for managing books. It allows users to perform CRUD operations on book data, including adding new books, viewing all books, viewing details of a specific book, updating a book's details, and deleting a book. The application uses MongoDB to store book data.

## API Endpoints and Usage

### Add a New Book

- Endpoint: `POST /books`
- Request Body:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A novel about the American Dream and its corruption."
  }
  ```
