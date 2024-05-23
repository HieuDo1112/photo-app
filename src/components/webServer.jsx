'use strict';
var express = require('express');
var portno = 3000;   // Port number to use

var app = express();
var models = require('./modelData/photoApp.js').models;