const mysql = require('mysql');
//图片数据库连接
const piconn = mysql.createConnection({
	host: "127.0.0.1",
	user: "ctf",
	password: "114514",
	database: "ctf",
	multipleStatements: true,
});

module.exports = piconn;
