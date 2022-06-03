const mongoose = require("mongoose");

const routSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    }
})
const rout = mongoose.model('rout', routSchema);
module.exports = rout;