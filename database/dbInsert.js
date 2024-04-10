//图片数据库连接
const piconn = mysql.createConnection({
	host: "127.0.0.1",
	user: "",
	password: "",
	database: "",
	multipleStatements: true,
});

function dbInsert(id, path){
    const sqlStr = "insert into picture(id,path) values(0,?)";
    piconn.query(sqlStr, [path], (err, results) => {
        if(err) throw err;
        if(results.affectedRows === 1){
            console.log("插入了一条数据： " + path);
            return 0;
        }else{
            console.log("插入数据失败。" + path);
            return -1;
        }
    })
}

module.exports = dbInsert;