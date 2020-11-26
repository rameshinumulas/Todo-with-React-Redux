const fs = require('fs');
const Users = require('./mongoShema')

const uuid = require('uuid');

module.exports=((tasks)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    console.log(present_date)
  
    tasks.post('/usertasks',async(req,res)=>{
        console.log(req.body)
        const newTask = {
            id:uuid.v4(),
            date:present_date,
            title:req.body[1].title,
            task:req.body[1].task,
            taskType:req.body[1].taskType
        }
        try{
            const email_check = await Users.updateOne({email:req.body[0]},
                {$push:{Tasks:
                    {id:uuid.v4(),date:present_date,
                    title:req.body[1].title,task:req.body[1].task,taskType:req.body[1].taskType}}})
            const totalTasks = await Users.findOne({email:req.body[0]})
                    res.json({tasks:totalTasks})
            console.log(totalTasks)
        }catch(err){
            console.log(err);
        }

    })
})
