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

// 2. create web server object
var app = http.createServer(function(request,response){
    // 2.1 get url info.
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // query string
    var pathname = url.parse(_url, true).pathname; // path name
    var title = queryData.id; // title
    
    // 2.2 login status check
    var isOwner = auth.isOwner(request, response);
    var user = auth.getUser(request, response);
    
    // 2.3 routing
    if(pathname === '/'){
        if(queryData.id === undefined){
            // 2.3.1 home
            //

