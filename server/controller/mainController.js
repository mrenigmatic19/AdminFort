const express = require('express')
const bcrypt =require('bcrypt')
const user_info=require('../database/userschema')

const getMain = async (req,res) => {
    res.render('login')
    };

const postMain = async (req,res) => {
    try {
        
      const chk = await user_info.findOne({UserID:req.body.user})
     
      if(chk){
          const ismatch=await bcrypt.compare(req.body.password,chk.Password)
          console.log(ismatch)
      if(ismatch){
          if(chk.Role=='Admin')
              res.redirect("admin")
        else
          res.redirect("user")}
          else{
              req.flash('msg','Wrong Password')
              res.redirect("")
          }}
          else{
          req.flash('msg','Wrong Username')
      res.redirect("")}
      
      }
      catch{
          req.flash('msg','Enter Details')
          res.redirect("")
      
      }

      
    };

module.exports= {getMain,postMain}