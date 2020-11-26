const fs = require('fs');
const Users = require('./mongoShema')

const uuid = require('uuid');

module.exports=((tasks)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    console.log(present_date)



tasks.get("/get/todaytasks/:email",async(req,res)=>{ 
    console.log(req.params.email);
    try{
        const Today_tasks = await Users.find({email:req.params.email})
        // console.log(Today_tasks)
        const h = Today_tasks.map(each=>
            each.Tasks.filter(single=>single.date === present_date))
            console.log(h,"eeeeeee");
        res.json(h)
    }catch(err){
        console.log(err);
    }

})

})