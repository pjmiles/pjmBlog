const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    }
})

module.exports = new mongoose.model("comment", commentSchema)