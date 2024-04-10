const piconn = require('./picDBconn');

function dbSearch(id){
    if(typeof id != 'undefined'){
        const sqlStr = "SELECT * FROM picture WHERE id = ?";
        piconn.query(sqlStr, [id], (err, results) => {
            if(err) throw err;
            if(results.length > 0){
                console.log("获取图片，id： " + id);
                return{
                    results,
                }
            }else{
                    console.log("查询失败");
                    return -1;
                }
            })
        }else{
            const sqlStr = "SELECT * FROM picture";
            piconn.query(sqlStr, (err, results) => {
                if(err) throw err;
                if(results.length > 0){
                    console.log("获取了所有图片信息。");
                    return{
                        results,
                    }
                }else{
                    console.log("也许并没有图片。");
                    return -1;
                }
            })
        }
    }

module.exports = dbSearch;