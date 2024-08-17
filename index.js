require('./configuration');
const event=require('./eventSchema');
const express=require('express')
const app=express();
const cors = require('cors');
const dotenv = require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/events',async(req,resp)=>{
    const findEvents=await event.find({});
    resp.json({events:findEvents,status:200});
})

app.post('/addEvent',async(req,resp)=>{
    const addEvents=new event(req.body);
    const saveEvents=await addEvents.save();
    const findEvents=await event.find({});
    resp.json({events:findEvents,status:200});
})

app.put('/updateEvent/:id',async(req,resp)=>{
    const  id = req.params.id;
    const {title,category,date}=req.body;
    const updateEvent=await event.updateOne({_id:id},{$set:{title:title,category:category,date:date}});
    const findEvents=await event.find({});
    resp.json({events: findEvents,status:200});
    

})

app.delete('/deleteEvent/:id',async(req,resp)=>{
    const {id}=req.params;
    const deleteEvent=await event.deleteOne({_id:id});
    resp.json({message:"deleted successfully",status:200});
})

app.listen(process.env.PORT,()=>{
    console.log('server is live');
})