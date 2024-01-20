const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const flash = require('connect-flash')
const session = require('express-session')
const mongosession=require("connect-mongodb-session")(session)


require('./database')
const user_info = require('./database/userschema')
const store=new mongosession({
    uri:"mongodb://127.0.0.1:27017/AdminFort",
    collection:"mysessions"
})


const app=express()


app.use(express.json())
app.use(flash())
app.use(express.urlencoded({extended:false}))
app.use(express.static("../public"))

app.use(session({
    secret:"AdminFort",
    resave:false,
    saveUninitialized:false,
    store:store
}))



const templatepath=path.join(__dirname,'../public')
app.set("view engine","ejs")
app.set("views",templatepath)



const userid=async(req,res,next)=>{
    next()
}

const adminid=async(req,res,next)=>{
    next()
}

const mainRouter = require('./router/mainRouter')
const userRouter = require('./router/userRouter')
const adminRouter = require('./router/adminRouter')
const controlRouter = require('./router/controlRouter')
app.use('/',mainRouter)
app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.use('/control',controlRouter)



const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log("Server is Running!")
    })