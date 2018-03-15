var express = require("express");
var app = express();
var path = require("path");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "192.168.179.60:3306",
  user: "root",
  password: "Saphira1007"
});

con.connect(function (err) {
  if (err)  {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

app.get('/',function(req,res){
  //__dirname : The directory the file is in
  res.sendFile(path.resolve(__dirname, 'public//index.html'));
});

app.get('/about',function(req,res){
  res.sendFile(path.resolve(__dirname, 'public/about.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.resolve(__dirname, 'public/sitemap.html'));
});

/**
 * Statically host every file inside public/
 * Example:
 *   File: public/css/main.css
 *   Path on the server: /css/main.css
 */
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(3000, function () {
	console.log("Running at Port 3000");
});
