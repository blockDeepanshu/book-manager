require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connectDB");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const BookRoutes = require("./routes/books");

const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/v1/books", BookRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URL.replace(
  "<password>",
  process.env.MONGO_PASSWORD
);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
