const express = require("express");
const port = 8003;
const bodyParser=require('body-parser')
const app = express();
const db=require('./config/mongoose');
const Item=require('./models/newitem');
const session = require('express-session');
const flash = require('connect-flash');


//Using Middlewares
app.use(express.urlencoded());
app.use(express.static('./assets'));
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());
//Using Express Router
app.use('/', require('./routes'));

//Setting up My View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: "secret",
    saveUninitialized: true,
    resave: true
  }));

// Listening to port
app.listen(port , function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is Running on Port::",port);
});