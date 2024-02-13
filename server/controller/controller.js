const express = require('express')
const user_info=require('../database/userschema')

const getControl = async (req,res) => {
     user_info.find().then((data)=>{
      console.log(data)
      res.render('control',{message:req.flash('msg'),data:data})
     }).catch((e)=>{
      console.log(e)
     })
 
      
}

const postControl = async (req,res) => {
    
    };

module.exports= {getControl,postControl}