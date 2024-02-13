const mongoose = require("mongoose")
require("../db")

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
    Contact: {
        type: String,
        required:true,
        unique:false
       
    },
    Password: {
        type: String,
        required:true,
        unique:false
    },
    Role:{
        type:String,
        required:true,
        unique:false
    }

    })
    const user_info=new mongoose.model("userinfo",userschema,"userinfo")
module.exports=user_info
