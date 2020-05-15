var mysql = require("mysql");

var pool = mysql.createPool({
	host:"localhost",
	port:"3306",
	user:"root",
	//密码
	password:"qazxcv",
	//数据库
	database:"goods"
});

module.exports = pool;