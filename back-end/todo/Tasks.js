// const fs = require('fs');
// const Users = require('./mongoShema')

// const uuid = require('uuid');

// module.exports=((tasks,taskDetails)=>{
    // const timeElapsed = Date.now();
    // const today = new Date(timeElapsed);
    // const present_date=today.toDateString()
    // console.log(present_date)
  
    // tasks.post('/usertasks',async(req,res)=>{
    //     console.log(req.body)
    //     const newTask = {
    //         id:uuid.v4(),
    //         date:present_date,
    //         title:req.body[1].title,
    //         task:req.body[1].task,
    //         taskType:req.body[1].taskType
    //     }
    //     try{
    //         const email_check = await Users.updateOne({email:req.body[0]},
    //             {$push:{Tasks:
    //                 {id:uuid.v4(),date:present_date,
    //                 title:req.body[1].title,task:req.body[1].task,taskType:req.body[1].taskType}}})
    //         const totalTasks = await Users.findOne({email:req.body[0]})
    //                 res.json({tasks:totalTasks})
    //         console.log(totalTasks)
    //     }catch(err){
    //         console.log(err);
    //     }


    // })

    // tasks.get('/delete/:deleteId/:email',async(req,res)=>{

    //     try{
    //         const deleteItems = await Users.find({email:req.params.email})
    //         // console.log(deleteItems,"lll");
    //         for (let each of deleteItems){
    //            if(each.Tasks){
    //                var filterIds = each.Tasks.filter(single=>single.id !== req.params.deleteId)
    //            }
    //         }
    //         const saveDeletetaks = await Users.updateOne({email:req.params.email},
    //             {$set:{Tasks:filterIds}})
    //         // console.log(filterIds);
    //         res.json(filterIds)
    //     }
    //     catch(err){
    //         console.log(err);
    //     }

    // })


    // tasks.get("/get/todaytasks/:email",async(req,res)=>{ 
    //     console.log(req.params.email);
    //     try{
    //         const Today_tasks = await Users.find({email:req.params.email})
    //         // console.log(Today_tasks)
    //         const h = Today_tasks.map(each=>
    //             each.Tasks.filter(single=>single.date === present_date))
    //             console.log(h,"eeeeeee");
    //         res.json(h)
    //     }catch(err){
    //         console.log(err);
    //     }




    //     // for (let task of taskDetails){
    //     //     console.log("999")
    //     //     if(task.email===req.params.email){
    //     //         if(task.Tasks){
    //     //             const filter_by_today = task.Tasks.filter(eachone=>
    //     //                 eachone.date === present_date)
    //     //                 console.log(filter_by_today,"6666666")
    //     //                 res.json(filter_by_today)   
    //     //         }
    //     //     }  
    //     // } 
    // })
    
    // tasks.get("/get/:type/tasks/:email",async(req,res)=>{ 
    //     console.log("999",req.params.type)

    //     try{
    //         const type_task = await Users.find({email:req.params.email})
    //         for (let each of type_task){
    //             if(each.Tasks){
    //                 var filter_types = each.Tasks.filter(single=>single.taskType === req.params.type)
    //             }
    //          }
    //         res.json(filter_types)
    //     }
    //     catch(err){
    //         console.log(err);
    //     }

    // })

    // tasks.get('/delete/taskType/:id/:email/:taskType',async(req,res)=>{

    //     try{
    //         const deleteItems = await Users.find({email:req.params.email})
    //         // console.log(deleteItems,"lll");
    //         for (let each of deleteItems){
    //            if(each.Tasks){
    //                var filterIds = each.Tasks.filter(single=>single.id !== req.params.id)
    //            }
    //         }
    //         const saveDeletetaks = await Users.updateOne({email:req.params.email},
    //             {$set:{Tasks:filterIds}})
    //         // console.log(filterIds);
    //         const filterWithTypes = filterIds.filter(type=> type.taskType === req.params.taskType)
    //         res.json(filterWithTypes)
    //     }
    //     catch(err){
    //         console.log(err);
    //     }

    // })


// })



