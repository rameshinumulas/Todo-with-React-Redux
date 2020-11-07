const fs = require('fs');
const uuid = require('uuid');

module.exports=((tasks,taskDetails)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    console.log(present_date)
  
    //Adding New Task...
    tasks.post('/usertasks',(req,res)=>{
        console.log(req.body)
        const newTask = {
            id:uuid.v4(),
            date:present_date,
            title:req.body[1].title,
            task:req.body[1].task,
            taskType:req.body[1].taskType
        }
        if(!newTask.date || !newTask.title || !newTask.task || !newTask.taskType){
            res.json({msg:"please provide all details "})
            console.log("after if else")
        }else{
            for (let item of taskDetails){
                if(item.email === req.body[0]){
                    console.log("inside for if else")
                    item.Tasks.push(newTask)
                    res.json(item.Tasks)
                }  
            }
        }
       
        fs.writeFileSync("./todo/taskoperations/Task.json",JSON.stringify(taskDetails,null,4))
    })
 
    //getting Today tasks.....
    tasks.get("/get/todaytasks/:email",(req,res)=>{ 
        for (let task of taskDetails){
            console.log("999")
            if(task.email===req.params.email){
                if(task.Tasks){
                    const filter_by_today = task.Tasks.filter(eachone=>
                        eachone.date === present_date)
                        console.log(filter_by_today,"6666666")
                        res.json(filter_by_today)   
                }
            }  
        } 
    })
    //getting type of the tasks...
    tasks.get("/get/:type/tasks/:email",(req,res)=>{ 
        console.log("999",req.params.type)
        for (let task of taskDetails){
            if(task.email=== req.params.email){
                if(task.Tasks){
                    const filter_by_today = task.Tasks.filter(eachone=>
                        eachone.taskType === req.params.type)
                        console.log(filter_by_today,"pppppppppppp")
                        res.json(filter_by_today)     
                }
            }
           
        } 
    })
    //deleting task
    tasks.get('/delete/:deleteId/:email/:type',(req,res)=>{
        // console.log(req.body)
        for (let task of taskDetails){
            if(task.email===req.params.email){
                if(task.Tasks){
                    console.log(req.params.type,req.params.deleteId)
                    const filter_by_today = task.Tasks.filter(eachone=>
                        eachone.id !== req.params.deleteId)
                        const finalFilter = filter_by_today.filter(deletetask=>
                            deletetask.taskType === req.params.type )
                        console.log(finalFilter,"tttttttttttt")
                        res.json(finalFilter)  
                        task.Tasks = filter_by_today 
                }
            }
          
        }
        fs.writeFileSync("./todo/taskoperations/Task.json",JSON.stringify(taskDetails,null,4))
    })     
    //deleting today tasks....
    tasks.get('/delete/:deleteId/:email',(req,res)=>{
        // console.log(req.body)
        for (let task of taskDetails){
            if(task.email===req.params.email){
                if(task.Tasks){
                    console.log(req.params.type,req.params.deleteId)
                    const filter_by_today = task.Tasks.filter(eachone=>
                        eachone.id !== req.params.deleteId && eachone.date===present_date)
                        res.json(filter_by_today)  
                        task.Tasks = filter_by_today 
                }
            }
          
        }
        fs.writeFileSync("./todo/taskoperations/Task.json",JSON.stringify(taskDetails,null,4))

    })
})



