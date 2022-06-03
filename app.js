const express = require('express')
const mongoose = require('mongoose')

const app = express()

// connection to mongodb database

mongoose.connect("mongodb://localhost/pj_blog", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to mongodb!")
})

// middlewares
app.use(express.urlencoded({extended: true}))




// routes
app.use(require("./routes/index"))
app.use(require("./routes/compose"))

// server configurations

app.listen(3000, () => console.log("server stated listenting on port: 3000"))