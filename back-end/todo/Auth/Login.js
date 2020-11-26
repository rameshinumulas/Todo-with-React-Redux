const Users = require ('../mongoShema')
module.exports = ((logins,taskDetails)=>{
    //for varifying user details.. post method
    logins.post('/login',async(req,res)=>{
        const newUserLogin = {
            email:req.body.email,
            password:req.body.password
        }

        const login_Check_email = await Users.find({email:newUserLogin.email})
        const login_Check_password = await Users.find({password:newUserLogin.password})
        console.log(login_Check_email,login_Check_password);
        if(login_Check_email[0]){
            if(login_Check_password[0]){
                res.json({msg:"login successfull !!"})
            }else{
                res.json({msg:"incorrect password !!! please provide your account password"})
            }
        }else{
            res.json({msg:"incorrect email or You don't have an account please sign up!!!"})
        }
             
    })
}) 