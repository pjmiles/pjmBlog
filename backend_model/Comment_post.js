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
        },
        author: {
            type: mongoose.Types.ObjectId,
            ref: "BlogPost"
        },

        date:{
            type: Date,
            default:Date.now
        }
})

module.exports = new mongoose.model("comment", commentSchema)

