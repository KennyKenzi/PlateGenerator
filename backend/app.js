const bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const cors = require ('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var plateNumberRouter = require('./routes/plateNumber')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(cors())

// app.use(app.router);
// routes.initialize(app);


app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', plateNumberRouter)



module.exports = app;
