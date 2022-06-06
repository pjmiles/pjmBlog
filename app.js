const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 8000


// connection to mongodb database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pj_blog_new', 
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
app.use(require('./routes/blogy'))



// server configurations
app.listen(PORT, () => console.log(`server stated listenting on port: ${PORT}`))