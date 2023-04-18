//import dependencie

const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require("bcryptjs");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


const app=express();

//Configure env file and require connection file
dotenv.config({path:'./config.env'});
require('./db/conn');

//require model
const Users=require('./Models/userSchema');

app.get( '/',(req,res)=>{
    res.send("Hello world");
})

//run server
app.listen("3001",()=>{
console.log("server is listening");
})