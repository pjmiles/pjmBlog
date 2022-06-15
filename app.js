require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./routes/blogy");
const port = 8000;
const cors = require('cors')

// connection to mongodb database
mongoose.connect(
  process.env.MONGODB_URI || process.env.db,
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
app.use(cors())

// routes
app.use(require("./routes/index"));
app.use("/routes", Blog);

// server configurations
app.listen(process.env.PORT || port, () =>
  console.log(`server stated listenting on port: ${process.env.PORT}`)
);
