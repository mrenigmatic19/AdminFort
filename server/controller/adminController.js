const express = require('express');
const bcrypt = require('bcrypt')
const user_info = require('../database/userschema');
require("../db")


const getAdmin = async (req,res) => {
    res.render('admin')
    };

const postAdmin = async (req,res) => {
  try{

    const chk = await user_info.findOne({UserID:req.body.user})

    if(!chk){
    const hashpwd=await bcrypt.hash(req.body.password,12)
          const newuserreg= new user_info({
              UserID :req.body.user,
              Name:'abc',
              Role:req.body.role,
              Password:hashpwd,
              Contact:'1234567890'
          })
        
          await user_info.insertMany([newuserreg])
          req.flash('msg','Successfully Registered')
          res.redirect("admin")

      }
      else{

          req.flash('msg','Already Registered')
          res.redirect("admin")

      }
    }catch(e){
        console.log(e)
      req.flash('msg','Enter Full details')
      res.redirect("admin")
      }
    };

module.exports= {getAdmin,postAdmin}