var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname, 'public//index.html'));
  //__dirname : The directory the file is in
});

app.get('/about',function(req,res){
  res.sendFile(path.resolve(__dirname, 'public/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.resolve(__dirname, 'public//sitemap.html'));
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, function () {
	console.log("Running at Port 3000");
});
