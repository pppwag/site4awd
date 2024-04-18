const conn = require('./userDBconn');

function dbLogin(userName, passWord) {
    return new Promise((resolve, reject) => {
        if (!userName || !passWord) {
            resolve({
                code: 0,
                msg: "用户名或密码为空！"
            });
        }

        const sqlStr = "SELECT * FROM user WHERE userName=? and passWord=?";
        conn.query(sqlStr, [userName, passWord], (err, results) => {
            if (err) {
                reject(err);
            }

            if (results.length > 0) {
                resolve({
                    code: 1,
                    identity: results[0].ID,
                    userName: results[0].userName,
                    msg: "正确登录"
                });
            } else {
                resolve({
                    code: 0,
                    msg: "错误的用户名或密码"
                });
            }
        });
    });
}

module.exports = dbLogin;
