const conn = require('./userDBconn');

function dbLogin(userName, passWord) {
    if(!userName || !passWord){
        return {
            code: 0,
            msg: "用户名或密码为空！"
        };
    }
    const sqlStr = "SELECT * FROM user WHERE userName=? and passWord=?"
    conn.quert(sqlStr, [userName,passWord], (err, results) => {
        if(err) throw err;
        if(results.length > 0){
            return {
                code: 1,
                identity: results[0].identity,
                userName: results[0].userName,
            }
        }
    })
}

module.exports = dbLogin;