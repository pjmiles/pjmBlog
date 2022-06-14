const mongoose = require("mongoose");

// schema for posting blog
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Post", postSchema);
