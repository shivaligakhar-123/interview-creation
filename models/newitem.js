const mongoose=require('mongoose');

// Designing Schema for Database
const listSchema=new mongoose.Schema({
  startDate: String,
  endDate: String,
  startTime: String,
  endTime: String,
  description: String,
  name_interviewer: String,
  name_student:String,
  mailid_interviewer: String,
  mail_id_student:String,
  googleId:String,
  isDone: Boolean


})

// Exporting Schema
const Item=mongoose.model('Item', listSchema);

module.exports=Item;