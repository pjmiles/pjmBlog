require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const blogRun = require('./routes/blogy')

// connection to mongodb database
mongoose.connect(process.env.MONGODB_URI || process.env.db, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to mongodb!')
})

// middlewares
app.use(express.json()); // for data parsing
app.use(express.urlencoded({ extended: false }))


// routes
app.use(require('./routes/index'))
app.use(blogRun)


// server configurations
app.listen(process.env.PORT, () => console.log(`server stated listenting on port: ${process.env.PORT}`))