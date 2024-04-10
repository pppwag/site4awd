const mysql = require('mysql');
//用户数据库连接
const conn = mysql.createConnection({
	host: "127.0.0.1",
	user: "",
	password: "",
	database: "",
	multipleStatements: true,
});

function dbLogin(userName, passWord) {
    if(!userName || !passWord){
        return {
            code: 1,
            msg: "用户名或密码为空！"
        };
    }
    const sqlStr = "SELECT * FROM user WHERE userName=? and passWord=?"
    conn.quert(sqlStr, [userName,passWord], (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            return {
                identity: results[0].identity,
                userName: results[0].userName,
            }
        }
    })
}

module.exports = dbLogin;