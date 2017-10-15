
// Express config
var validator = require('validator');
var express = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
//passport config
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('./config/main');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;