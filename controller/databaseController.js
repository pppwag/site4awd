const dbSearch = require('../database/dbSearch');
const dbInsert = require('../database/dbInsert');
const dbRegister = require('../database/dbRegister');
const dbLogin = require("../database/dbLogin");

class databaseController{
    search(id){
        try{
            dbSearch(id);
            return 0;
        }catch(error){
            res.send(error);
            return -1;
        }
    }

    insert(path){
        try{
            const id = dbInsert(path);
            return id;
        }catch(error){
            res.send(error);
            return -1;
        }
    }

    register(userName, passWord){
        try{
            const message = dbRegister(userName, passWord);
            res.send(message);
            return;
        }catch(error){
            res.send(error);
            return -1;
        }
    }

    login(userName, passWord){
        try{
            const result = dbLogin(userName, passWord);
            if(result.code === 0){
                res.send(result);
                return -1;
            }else{
                return{code: 1,msg: "登陆成功", id: result.identity, userName: result.userName};
            }
        }catch(error){
            res.send(error);
            return -1;
        }
    }
}