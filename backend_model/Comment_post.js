const mongoose = require("mongoose")

// schema for the comment
const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: true
    }
    
})

module.exports = new mongoose.model("comment", commentSchema)