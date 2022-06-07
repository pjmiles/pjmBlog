const mongoose = require("mongoose")

// schema for the comment
const commentSchema = mongoose.Schema({
    
        content: {
            type: String,
            required: true
        },
        comment: {
            type: mongoose.Types.ObjectId,
            ref: "post"
        },

        date:{
            type: Date,
            default:Date.now
        }
})

module.exports = new mongoose.model("comment", commentSchema)

