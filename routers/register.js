const express = require("express");
const router = express.Router();
const xss = require('xss');
const databaseController = require('../controller/databaseController');

router.get("/", (req, res) => {
    filePath = path.join(__dirname,'../views/regiter.html');
    res.sendFile(filePath);
    console.log('[info]' + res.ip + ' requested: ' + filePath);
});

router.post("/", (req, res) => {
    var userName = xss(req.body.userName);
    var passWord = xss(req.body.passWord);
    var result = databaseController.register(userName, passWord);
    if(result.code === 1){
        res.send(message);
        const filePath = path.join(__dirname,'../views/login.html');
        res.sendFile(filePath);
        console.log("[info] 注册完毕跳转: " + filePath);
    }else{
        res.send(message);
    }
})

module.exports = router;