const mysql = require('mysql');
//用户数据库连接
const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "",
	password: "",
	database: "",
	multipleStatements: true,
});

module.exports = conn;