const conn = require('./userDBconn');

async function dbVerify(id, userName) {
    return new Promise((resolve, reject) => {
//        console.log(id, userName);
        if (!id || !userName) {
            // 如果 ID 或用户名为空，返回 token 无效的错误信息
            return reject({ code: 0, msg: "token无效" });
        }

        const sqlStr = "SELECT * FROM user WHERE userName=? and id=?";
        conn.query(sqlStr, [userName, id], (err, result) => {
            if (err) {
                // 如果查询出错，返回错误信息给 Promise 的 reject 函数
                return reject(new Error("查询出错"));
            }

            if (result.length > 0) {
                // 如果查询结果不为空，说明验证通过，返回验证结果给 Promise 的 resolve 函数
                return resolve(1);
            } else {
                // 如果查询结果为空，说明用户不存在，返回错误信息给 Promise 的 reject 函数
                return reject(new Error("没有这个人。"));
            }
        });
    });
}

module.exports = dbVerify;
