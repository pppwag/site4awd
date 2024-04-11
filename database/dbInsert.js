const piconn = require('./picDBconn');

function dbInsert(path, uid){
    const sqlStr = "insert into picture(ID,path,owner) values(0,?,?)";
		piconn.query(sqlStr, [path,id,tag], (err, results) => {
        if(err) throw err;
        if(results.affectedRows === 1){
            var id;
            piconn.query("SELECT LAST_INSERT_ID()", (err, identity) => {
                if(err) throw err;
                if(id){
                    id = identity;
                }
            });
            console.log("插入了一条数据： " + path);
            return id;
        }else{
            console.log("插入数据失败。" + path);
            return -1;
        }
    })
}

module.exports = dbInsert;
