const express = require('express')
const mongoose = require('mongoose')

const app = express()


const BlogPost = require("./backend_model/Blog_post");

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

app.get("/blogPost", async(req, res) =>{
    const blogPost = await BlogPost.find();
    res.send({ data: blogPost })
})

// routes
app.use(require("./routes/compose"))
app.use(require("./routes/comment"))



// server configurations

app.listen(8000, () => console.log("server stated listenting on port: 8000"))