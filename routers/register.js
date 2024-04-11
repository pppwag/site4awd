const express = require('express');
const router = express.Router();
const path = require('path');
const xss = require('xss');
const databaseController = require('../controller/databaseController');

router.get("/", (req, res) => {
    res.render('register.html');
    console.log('[info]' + req.ip + ' requested: register.html');
});

router.post("/", (req, res) => {
    var userName = xss(req.body.userName);
    var passWord = xss(req.body.passWord);
    var result = databaseController.register(userName, passWord);
    if(result.code === 1){
        res.send(message);
		res.render('login.html')
        console.log("[info] 注册完毕跳转: login.html");
    }else{
        res.send(message);
    }
})

module.exports = router;
