const express = require("express");
const port = 8003;
const bodyParser=require('body-parser')
const app = express();
const db=require('./config/mongoose');
const Item=require('./models/newitem');

//Using Middlewares
app.use(express.urlencoded());
app.use(express.static('./assets'));
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));


//Using Express Router
app.use('/', require('./routes'));

//Setting up My View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Listening to port
app.listen(port , function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is Running on Port::",port);
});