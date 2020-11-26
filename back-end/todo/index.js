const express = require('express');
const app = express()
const router = express.Router();
const cors = require('cors')
const PORT =  process.env.PORT || 2020

app.use(express.json())
app.use(cors())

const fs = require("fs")

const mongoose = require('mongoose')
const url = 'mongodb://localhost/userDetails'

mongoose.connect(url,{useNewUrlParser:true})

const mongoConect = mongoose.connection

mongoConect.on('open',()=>{
console.log("mongo  connected ");
})


app.use('/task',router)



require('./todo/Auth/Login')(router)


require('./todo/Auth/signUp')(router)



app.listen(PORT,err=>{
    if(err)throw err
    console.log("tasks workingg.....");
})







