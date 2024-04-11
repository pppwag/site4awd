const conn = require('./userDBconn');

function dbRegister(userName, passWord) {
    if(!userName || !passWord){
        return {
            code: 0,
            msg: "用户名或密码为空！"
        };
    }
    if(userName && passWord){
        const result = "SELECT * FROM user WHERE userName = '${userName}";
        conn.query(result, [userName], (err, results) => {
            if(err) throw err;
            if(results.length >= 1){
                console.log("尝试注册重复用户失败： " + userName);
                return {
                    code: 0,
                    msg: "注册失败，用户名重复。"
                };
            }else{
                    const sqlStr = "insert into user(ID,userName,passWord) values(0,?,?)";
                    conn.query(sqlStr, [userName,passWord], (err,results) => {
                        if(err) throw err;
                        if(results.affectedRows === 1){
                            console.log("已注册用户： " + userName);
                            return {
                                code: 1,
                                msg: "注册成功。"
                            };
                        }else{
                            console.log("数据库原因注册失败了：" + userName);
                            return{
                                code: 0,
                                msg: "注册失败。"
                            }
                            }
                        })
                    }
                })
            }
        }

module.exports = dbRegister;
