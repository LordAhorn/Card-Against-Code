
var mysql = require('public/scripts/mysql');
 var con = mysql.createConnection({
    host: "192.168.179.60:3306",
    user: "root",
    password: "Saphira1007"
 });
function check_connection_result(err){
    if(err) throw err;

    console.log('Connected');
};


 con.connect(check_connection_result);
