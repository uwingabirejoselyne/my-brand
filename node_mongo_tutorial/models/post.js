const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    message: {
        type:String,
        default:Date.now
    }
});
module.exports = mongoose.model('posts',postSchema)