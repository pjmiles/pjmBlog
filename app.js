const express = require('express')
const mongoose = require('mongoose')

const app = express()



// connection to mongodb database
mongoose.connect("mongodb://localhost:27017/pj_blog_new", 
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
app.use(require("./routes/blogy"))



// server configurations
app.listen(8000, () => console.log("server stated listenting on port: 8000"))