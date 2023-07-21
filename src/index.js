const express = require('express');
const connect = require('./config/database');
const { Connection } = require('mongoose');
const app = express();

const UserRepository = require('./repository/user-repository');



app.listen(3000, async () => {
   
    console.log("Server Started");
    await connect();
    console.log("Mongo db Connection Established");
   
    // const user = await User.create({
    //     Name: "Raju Gupta",
    //     userEmail: "raju2001152gmail.com"
    // });
    const UserRepo = new UserRepository();
    const user = await UserRepo.get('64baf7848cada4f4aa3a90b3');
   
    console.log(user);
})