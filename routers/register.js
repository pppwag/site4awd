const express = require('express');
const router = express.Router();
const xss = require('xss');
const crypto = require('crypto');
const databaseController = require('../controller/databaseController');

//sha256加密
function sha256(str) {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

router.get("/", (req, res) => {
    res.render('register.html');
    // console.log('[info]' + req.ip + ' requested: register.html');
});

router.post("/", (req, res) => {
    var userName = xss(req.body.userName);
    var passWord = sha256(xss(req.body.passWord));
    var message = databaseController.register(userName, passWord);
    if(message.code === 1){
        res.send(message);
		res.render('login.html')
        console.log("[info] 注册完毕跳转: login.html");
    }else{
        res.send(message);
    }
})

module.exports = router;
