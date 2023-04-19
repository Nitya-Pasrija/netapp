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
app.post('/register', async (req, res) => {
    try {
      // Check if the user already exists
      const existingUser = await Users.findOne({ username: req.body.username });
      if (existingUser) {
        return res.status(400).send({ error: 'Username already exists' });
      }
  
      // Create a new user object from the request body
      const newUser = new Users(req.body);
  
      // Hash the password for security
      newUser.password = bcryptjs.hashSync(newUser.password, 10);
  
      // Generate a token for the user
      const token = await newUser.generateToken();
  
      // Save the user to the database
      await newUser.save();
  
      // Send the user object and token back to the client
      res.status(201).send({ user: newUser, token });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: 'Server error' });
    }
  });

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


