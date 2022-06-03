const express = require('express')
const app = express();
const mongoose = require('mongoose')


// connection to mongodb database

mongoose.connect("mongodb://localhost/pj_blog", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to mongodb!")
})

app.get('/', (req, res)=>{
    res.send("Home page")
})



// server configurations
app.listen(5000, () => console.log("server stated listenting on port: 3000"))