const mongoose = require("mongoose");
const signupSchema = mongoose.Schema({
    firstName: {
        type:String,
    },
    lastName: {
        type:String,
    },
    email: {
        type:String,
    },
    password:{
        type:String,
    },
    cpassword:{
        type:String,
    }
})
module.exports =mongoose.model('userposts',signupSchema)