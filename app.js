var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/' , function(req , res){
    res.send('Hello World');
})