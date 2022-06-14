const express = require('express');
const app = new express();

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/YouPortfolioDB',
{useNewURLParser: true, useUnifiedTopology: true});

const fileUpload = require('express-fileupload');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname + '\\' + 'login.html');
});

var server = app.listen(3000,function(){
    console.log ("node server runing port 3000. . . . .");
});