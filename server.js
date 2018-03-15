var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/index.html'));
  //__dirname : The directory the file is in
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname, '/sitemap.html'));
});

app.listen(3000, function () {
	console.log("Running at Port 3000");
});
