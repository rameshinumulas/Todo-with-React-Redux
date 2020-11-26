const fs = require('fs');
const Users = require('./mongoShema')

const uuid = require('uuid');

module.exports=((tasks)=>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const present_date=today.toDateString()
    console.log(present_date)



tasks.get('/delete/:deleteId/:email',async(req,res)=>{

    try{
        const deleteItems = await Users.find({email:req.params.email})
        // console.log(deleteItems,"lll");
        for (let each of deleteItems){
           if(each.Tasks){
               var filterIds = each.Tasks.filter(single=>single.id !== req.params.deleteId)
           }
        }
        const saveDeletetaks = await Users.updateOne({email:req.params.email},
            {$set:{Tasks:filterIds}})
        // console.log(filterIds);
        res.json(filterIds)
    }
    catch(err){
        console.log(err);
    }

})


})