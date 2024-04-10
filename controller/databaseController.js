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
            res.send(error);
            return 0;
        }
    }

    insert(path){
        try{
            const id = dbInsert(path);
            return id;
        }catch(error){
            res.send(error);
            return 0;
        }
    }

    register(userName, passWord){
        try{
            const message = dbRegister(userName, passWord);
            // res.send(message.msg);
            return message;
        }catch(error){
            res.send(error);
            return 0;
        }
    }

    login(userName, passWord){
        try{
            const result = dbLogin(userName, passWord);
            if(result.code === 0){
                // res.send(result);
                return 0;
            }else{
                return{code: 1,msg: "登陆成功", id: result.identity, userName: result.userName};
            }
        }catch(error){
            res.send(error);
            return 0;
        }
    }

    verify(id, userName){
        try{
            const result = dbVerify(id, userName);
            if(result.code === 1){
                console.log(result);
                return 1;
            }else{
                console.log(result);
                return 0;
            }
        }catch(error){
            res.send(error);
            return 0;
        }
    }
}