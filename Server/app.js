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
const port = process.env.PORT;

//require model
const Users=require('./Models/userSchema');

//These method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get( '/',(req,res)=>{
    res.send("Hello world");
})

//Registeration
app.post('/register', async (req, res)=>{
    try {
        //get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;


        const createUser = new Users({
            username : username,
            email: email,
            password : password
        });
        
        // Save method is used to create user or insert user
        //but before saving or inserting, password will Hash
        // because of hashing. After hash it will store to DB
        const created = await createUser.save()
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error)
       
    }
})

 //login user
 app.post('/login', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //find user if exist
        const user = await Users.findOne({email : email});
        if(user){
            //verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //genertate token which is defined in user schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    //expires token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else {
                res.status(400).send("Invalid Credentials");

            }
        } else{
            res.status(400).send("Invalid Credentials");
        }

    }  catch (error) {
        res.status(400).send(error);

    }
 
 })

 //run server
 app.listen(port, ()=>{
    console.log("Server is Listening")
 })


