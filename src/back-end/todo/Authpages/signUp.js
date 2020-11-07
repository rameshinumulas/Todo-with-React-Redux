const fs = require('fs')

module.exports=((signups,taskDetails)=>{
    // for creating new user account... post method
    signups.post('/signup',(req,res)=>{
        const newUser = {
            firstName:req.body.firstName,
            email:req.body.email,
            password:req.body.password,
            Tasks:[],
        }
        if(!newUser.firstName || !newUser.email || !newUser.password){
            return false;
        }
        const exitMsg = taskDetails.some(each=>(each.email === req.body.email && each.password === req.body.password))
        if (exitMsg){
            res.json({msg:" your account alredy  exits"})
        }
        else{
            taskDetails.push(newUser);
            res.json({msg:"succuessfully your account created"})
            fs.writeFileSync("./todo/Task.json",JSON.stringify(taskDetails,null,4),null)
            console.log("details updated");
        }
    })
})