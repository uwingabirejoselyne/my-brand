const express = require("express");
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
const app = express();

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/myApi", { useNewUrlParser: true })
  .then(() => {
    const app = express();

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });



