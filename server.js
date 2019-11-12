const express = require("express");
const http = require("http");
const path = require("path");
const fs = require('fs');
const spdy = require('spdy');
const key = fs.readFileSync('./ssl/private.key');
const cert = fs.readFileSync('./ssl/certificate.crt');
const ca = fs.readFileSync('./ssl/ca_bundle.crt');
const optionsHttps = {
    key,
    cert,
    ca,
    spdy: {
        protocols: [ 'h2', 'spdy/3.1', 'http/1.1' ],
        plain: false
    }
}
const app = express(); 

const PORT_http = 80; /* 80 */
const PORT_https = 443; /* 443 */
const server_http = http.createServer(app);
const server_https = spdy.createServer(optionsHttps,app);

//Redirections

function redirect(req, res, next) {
    if ( req.headers.host.indexOf('www.') > -1 ) { //If there's 'www.'
        var newHost = req.headers.host.replace('www.','') //Get rid of 'www.'
        return res.redirect(301, 'https://' + newHost + req.originalUrl); //Deliver https
    }
    if (req.protocol === 'http' ) { //If 'http' is requested
        var newHost = req.headers.host.replace('www.','') //Get rid of 'www.'
        return res.redirect(301, 'https://' + newHost + req.originalUrl); //Deliver https
    }
    next();
};
app.set('trust proxy', true);
app.use(redirect);


//Serve static

app.use('/css', express.static(__dirname + '/public/css', { maxAge: 2592000000 }));
app.use('/js', express.static(__dirname + '/public/js', { maxAge: 2592000000 }));
app.use('/assets', express.static(__dirname + '/public/assets', { maxAge: 31557600 })); 


//Routes

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/sheets',function(req,res){
    res.sendFile(path.join(__dirname+'/public/sheets.html'));
});
app.get('/sheets/archive-of-all-newsletter-materials',function(req,res){
    res.sendFile(path.join(__dirname+'/public/archive-newsletter.html'));
});
app.get('/sheets/digital-communities-for-recruiters',function(req,res){
    res.sendFile(path.join(__dirname+'/public/communities-for-recruiters.html'));
});
app.get('/sheets/top-notch-content-to-follow',function(req,res){
    res.sendFile(path.join(__dirname+'/public/top-notch-content.html'));
});
app.get('/sheets/useful-chrome-extensions-for-recruiters',function(req,res){
    res.sendFile(path.join(__dirname+'/public/chrome-extensions.html'));
});
app.get('/sheets/best-mobile-apps-for-recruiters',function(req,res){
    res.sendFile(path.join(__dirname+'/public/mobile-apps.html'));
});
app.get('/sheets/metrics-calculator-for-recruiters',function(req,res){
    res.sendFile(path.join(__dirname+'/public/metrics.html'));
});

app.get('/pricing',function(req,res){
    res.sendFile(path.join(__dirname+'/public/pricing-starred.html'));
});



//Start Server

server_http.listen(PORT_http, () => {
    console.log(`Server started at port ${PORT_http}`);
})
server_https.listen(PORT_https, () => {
    console.log(`Secure Server started at port ${PORT_https}`);
})

