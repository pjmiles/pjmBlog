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
    author: {
        type: String,
        required: false
    },
    date:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model("BlogPost", schema);
