//图片数据库连接
const piconn = mysql.createConnection({
	host: "127.0.0.1",
	user: "",
	password: "",
	database: "",
	multipleStatements: true,
});

function dbSearch(id){
    if(typeof id != 'undefined'){
        const sqlStr = "SELECT * FROM picture WHERE id = ?"
        piconn.query(sqlStr, [id], (err, results) => {
            if(err) throw err;
            if(results.length > 0){
                console.log("获取图片，id： " + id);
                return{
                    results[0].path;
                }
            }else{
                    console.log("查询失败");
                    return -1;
                }
            })
        }else{
            
        }
    }