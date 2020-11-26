const mongoose = require("mongoose")

// module.exports =((userSchema)=>{
    const userSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        Tasks:{
            type:[],
            required:true
    
        }
    })
// })


module.exports = mongoose.model("users",userSchema)



