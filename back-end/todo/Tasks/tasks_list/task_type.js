const fs = require('fs');
const Users = require('./mongoShema')

const uuid = require('uuid');

module.exports=((tasks)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    console.log(present_date)


tasks.get("/get/:type/tasks/:email",async(req,res)=>{ 
    console.log("999",req.params.type)

    try{
        const type_task = await Users.find({email:req.params.email})
        for (let each of type_task){
            if(each.Tasks){
                var filter_types = each.Tasks.filter(single=>single.taskType === req.params.type)
            }
         }
        res.json(filter_types)
    }
    catch(err){
        console.log(err);
    }

})

})