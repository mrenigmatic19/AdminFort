const mongoose = require("mongoose")
require("../database")

const userschema = new mongoose.Schema({
    Name : {
        type: String,
        required:true,
        unique:false
    },
    UserID: {
        type: String,
        required:true,
        unique:true
    },
    contact: {
        type: Number,
        required:true,
        unique:true
       
    },
    Password: {
        type: String,
        required:true,
        unique:false
    }

    })
    const user_info=new mongoose.model("user_info",userschema)
module.exports=user_info
