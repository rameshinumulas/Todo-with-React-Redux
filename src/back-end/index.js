const express = require('express');
const app = express()
const router = express.Router();
const cors = require('cors')

app.use(express.json())
app.use(cors())

const fs = require("fs")

let taskDetails = JSON.parse(fs.readFileSync('./todo/taskoperations/Task.json'))

// app.use("/",(req,res)=>{
//     res.send("Hello World")
// })
app.use('/task',router)

// user tasks router

require('./todo/taskoperations/Tasks')(router,taskDetails)

// Login router

require('./todo/Authpages/Login')(router,taskDetails)

// Signup router

require('./todo/Authpages/signUp')(router,taskDetails)



app.listen(2020,err=>{
    if(err)throw err
    console.log("tasks workingg.....");
})





