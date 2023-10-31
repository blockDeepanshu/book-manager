# Book Management RESTful API

This is a Node.js RESTful API for managing books. It allows users to perform CRUD operations on book data, including adding new books, viewing all books, viewing details of a specific book, updating a book's details, and deleting a book. The application uses MongoDB to store book data.

## API Endpoints and Usage

### Add a New Book

- Endpoint: `POST /books`
- Request Body:
  ```json
  {
    "data": {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "summary": "A novel about the American Dream and its corruption."
    }
  }
  ```
- Response:

  - Status: 201 Created
  - Body:

    ```json
    {
      "data": {
        "id": "60ab12dce56d4b001febc340",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "summary": "A novel about the American Dream and its corruption."
      }
    }
    ```

### View a list of all books

- Endpoint: `GET /books`
- Response:

  - Status: 200 OK
  - Body:

    ```json
    {
      "data": [
        {
          "id": "60ab12dce56d4b001febc340",
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "summary": "A novel about the American Dream and its corruption."
        }
        // Additional books
      ]
    }
    ```

### View details of a specific book by its ID

- Endpoint: `GET /books/{bookId}`
- Response:

  - Status: 201 Created
  - Body:

    ```json
    {
      "data": {
        "id": "60ab12dce56d4b001febc340",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "summary": "A novel about the American Dream and its corruption."
      }
    }
    ```

#### Update a Book's Details

- Endpoint: `PATCH /books`
- Request Body:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A novel about the American Dream and its corruption.Updated"
  }
  ```
- Response:

  - Status: 200 OK
  - Body:

    ```json
    {
      "data": {
        "id": "60ab12dce56d4b001febc340",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "summary": "A novel about the American Dream and its corruption.Updated"
      }
    }
    ```

### Delete a Book

- Endpoint: DELETE /books/{bookId}
- Response:
  ```json
  {
    "data": "Book deleted successfully"
  }
  ```

## Instructions to Set Up and Run the Application Locally

To set up and run the application locally, follow these steps:

1. Clone the Repository
   ```bash
   git clone https://github.com/blockDeepanshu/book-manager.git
   ```
2. Install Dependencies

   Navigate to the project directory and install the required npm packages:

   ```bash
   cd book-manager
   npm install

   ```

3. Setup .env file

   Create a .env file and add the following environment variables:

```bash
MONGO_PASSWORD = 'your mongo password'
MONGO_URL = 'mongo url'

```

4. Start the Application

   Start the Node.js server:

   ```bash
   npm start
   ```
