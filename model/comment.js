const mongoose = require("mongoose")

// schema for the comment
const commentSchema = mongoose.Schema({
    
        content: {
            type: String,
            required: true
        },
        post: {
            type: mongoose.Types.ObjectId
        },

        date:{
            type: Date,
            default:Date.now
        }
})

module.exports = new mongoose.model("comment", commentSchema)

