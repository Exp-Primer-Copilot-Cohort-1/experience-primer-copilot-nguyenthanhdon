// create web server
// 1. load modules      
var http = require('http'); // http module
var fs = require('fs');     // file system module
var url = require('url');   // url module
var qs = require('querystring'); // querystring module
var path = require('path'); // path module
var sanitizeHtml = require('sanitize-html');

var template = require('./lib/template.js');
var db = require('./lib/db.js');
var auth = require('./lib/auth.js');
var topic = require('./lib/topic.js');
var comments = require('./lib/comments.js');


