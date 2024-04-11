const conn = require('./userDBconn');

function dbVerify(id, userName){
    if(!id || !userName){
        return {
            code: 0,
            msg: "token无效",
        }
    }
    const sqlStr = "SELECT * FROM user WHERE userName=? and id=?";
    conn.query(sqlStr, [userName,id], (err,result) => {
        if(err){
            return{
                code:0,
                msg: "不存在的用户",
            }
        }
        if(result.length > 0){
            return{
                code: 1,
                msg: "鉴权通过",
				id: id,
            }
        }
    })
}

module.exports = dbVerify;
