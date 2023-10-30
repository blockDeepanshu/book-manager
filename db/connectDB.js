const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("Mongo DB connected");
});

mongoose.connect.on("error", (err) => {
  console.log("Mongo Connection error", err);
});

const connectDB = async (url) => {
  await mongoose.connect(url);
};

module.exports = connectDB;
