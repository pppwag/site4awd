const dbSearch = require('../database/dbSearch');
const dbInsert = require('../database/dbInsert');
const dbRegister = require('../database/dbRegister');
const dbLogin = require("../database/dbLogin");
const dbVerify = require('../database/dbVerify');

class databaseController{
    search(id){
        try{
            var result = dbSearch(id);
            return result;
        }catch(error){
            console.log(error);
            return 0;
        }
    }

    insert(path,uid){
        try{
            const id = dbInsert(path);
            return id;
        }catch(error){
            console.log(error);
            return 0;
        }
    }

    register(userName, passWord){
        try{
            const message = dbRegister(userName, passWord);
            // console.log(message.msg);
            return message;
        }catch(error){
            console.log(error);
            return 0;
        }
    }

	async login(userName, passWord) {
		    try {
				const result = await dbLogin(userName, passWord);
				if (result.code === 0) {
						return {code: 0};
//						console.log(result.msg);
				} else {
						return { code: 1, msg: "登录成功", id: result.identity, userName: result.userName };
//						console.log(result.msg);
				}
		    } catch (error) {
				console.log(error);
				return {code: 0};
			    }
		}

    async verify(id, userName, callback){
        try{
            const result = await dbVerify(id, userName);
            if(result === 1){
                console.log("鉴权通过" + result);
				callback(null,1);
            }else{
                console.log("鉴权不通过" + result);
                callback(null,0);
            }
        }catch(error){
            console.log(error);
            callback(error,0);
        }
    }
}

module.exports = new databaseController();
