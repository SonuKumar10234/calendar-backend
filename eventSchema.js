const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const eventSchema=new Schema({
    title:String,
    category:String,
    date:String
})

const event=mongoose.model('events',eventSchema);
module.exports=event;