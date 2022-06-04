// const mongoose = require("mongoose")

// // schema for the comment
// const commentSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: false
//     },
//     content: {
//         type: String,
//         required: true
//     }
    
// })

// module.exports = new mongoose.model("comment", commentSchema)



const mongoose = require('mongoose');

// creating comment for users to connect to posts
const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default:Date.now
    }
})

const comment  = mongoose.model('comment', commentSchema);
module.exports = comment;