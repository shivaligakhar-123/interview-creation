
// Configuring Mongo DB
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/to_do_dark_mode');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Cannot Connect to Database'));

db.once('open',function(){
console.log('Successfully Connected to Database :: MongoDB');
})