require('./db')
const bcrypt=require('bcrypt')
const user_info=require('./database/userschema')

const hashpwd=  bcrypt.hash(1234,12)
          const newuserreg=new user_info({
              UserID :'0001A',
              Name:'Admin',
              Role:'Admin',
              Password:hashpwd,
              Contact:12345
          })
         user_info.insertMany([newuserreg])
          