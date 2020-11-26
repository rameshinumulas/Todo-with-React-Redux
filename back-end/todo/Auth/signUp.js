const fs = require('fs')


const Users = require('../mongoShema')

module.exports=((signups)=>{
    // for creating new user account... post method
   
    signups.post('/signup',async(req,res)=>{
        console.log(req.body);
        const newUser = new Users({
            firstName:req.body.firstName,
            email:req.body.email,
            password:req.body.password,
            Tasks:[]
        })
        if(!newUser.firstName || !newUser.email || !newUser.password){
            console.log("please provide details")
            res.json({msg:"please provide details"})
            return false
        }
        const newUser_check = await Users.find({
        firstName:newUser.firstName},{email:newUser.email},{password:newUser.password})
        console.log(newUser_check)
        if (newUser_check[0]) { 
            console.log("yes")
            res.json({msg:"This account details are already exits"})
            return false
        }
        try{
            const newUserAccount = await newUser.save()
            res.json({msg:"Your account created succuessfully!!!!..."})
        }
        catch(err){
            console.log(err,"new error");
        } 

        // const exitMsg = taskDetails.some(each=>(each.email === req.body.email && each.password === req.body.password))
        // if (exitMsg){
        //     res.json({msg:" your account alredy  exits"})
        // }
        // else{
        //     taskDetails.push(newUser);
        //     res.json({msg:"succuessfully your account created"})
        //     fs.writeFileSync("./todo/Task.json",JSON.stringify(taskDetails,null,4),null)
        //     console.log("details updated");
        // }
    })
})