const mongoose = require("mongoose")

// schema for the comment
const commentSchema = new mongoose.Schema({
    
        content: {
            type: String,
            trim: true,
            required: true
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        },
        date:{
            type: Date,
            default: Date.now
        }
})

module.exports = mongoose.model("Comment", commentSchema)

