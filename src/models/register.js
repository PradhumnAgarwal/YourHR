const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type : String, 
        required : true
    },
    email:{
        type : String, 
        required : true,
        unique : true
    },
    resume:{
        type : String, 
        required : true,
    },
    password:{
        type : String, 
        required : true
    },
    conpassword:{
        type : String, 
        required : false
    },
})

const Register = new mongoose.model("Register",userSchema );

module.exports = Register