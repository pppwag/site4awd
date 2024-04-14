const mysql = require('mysql');
//用户数据库连接
const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "ctf",
	password: "114514",
	database: "ctf",
	multipleStatements: true,
});

module.exports = conn;
