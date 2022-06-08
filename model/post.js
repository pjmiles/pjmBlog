const mongoose = require("mongoose");

// schema for posting blog
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model("post", schema);
