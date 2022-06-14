const express = require('express');
const app = new express();
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/youPortfolioDB',
{useNewURLParser: true, useUnifiedTopology: true}); //create database connection

const fileUpload = require('express-fileupload');


app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '\\' + 'login.html');
});

app.get('/homepage',function(req,res){
    res.sendFile(__dirname + '\\' + 'homepage.html');
});

app.get('/register',function(req,res){
    res.sendFile(__dirname + '\\' + 'Register.html');
});

app.get('/account',function(req,res){
    res.sendFile(__dirname + '\\' + 'accountpage.html');
});

var server = app.listen(3000,function(){
    console.log ("node server runing port 3000. . . . .");
});