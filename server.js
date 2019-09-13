const express = require("express");
const http = require("http");
const path = require("path");
var serveIndex = require('serve-index');

const app = express(); 

const PORT_http = 80;
const server_http = http.createServer( app );


//Serve static

app.use('/css', express.static(__dirname + '/public/css', { maxAge: 2592000000 }));
app.use('/js', express.static(__dirname + '/public/js', { maxAge: 2592000000 }));
app.use('/assets', express.static(__dirname + '/public/assets', { maxAge: 31557600 })); 
app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));


//Routes

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


//Start Server

server_http.listen(PORT_http, () => {
    console.log(`Server started at port ${PORT_http}`);
})

