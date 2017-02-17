var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'..','client'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','/public')));

// mongoose
mongoose.connect('mongodb://localhost/mern_db',function(){
  console.log("Data Base OK");
});

app.get('*',(req,res)=>{
    res.render('index')
});

module.exports = app;
