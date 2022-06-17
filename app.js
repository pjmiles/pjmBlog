require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// connection to mongodb database
const database = () =>
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Connected to mongodb!");
    }
  );

// middlewares
app.use(express.json()); // for data parsing
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// import routes
const Blog = require("./routes/post");

// starting endpoint
app.use("/post", Blog);


// server configurations & databse start
const start = async () => {
  try {
    await database();
    app.listen(process.env.PORT, () =>
      console.log(`server stated listenting on port: ${process.env.PORT}`)
    );
  } catch (error) {
    console, log(error);
  }
};

start();
