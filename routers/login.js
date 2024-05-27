const express = require('express');
const router = express.Router();
const xss = require('xss');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
const databaseController = require('../controller/databaseController');
var secret = "niumochoubin";

router.get("/", (req, res) => {		//登录页面
	res.render('login.html');
	// console.log('[info]' + req.ip + ' requested: login.html');
});

router.get("/adminlogin/", (req, res) => {	//假管理员登录，蜜獾
	res.render('adminlogin.html');
	// console.log('[info]' + req.ip + ' requested: adminlogin.html');
});

//sha256加密
function sha256(str) {
  const hash = crypto.createHash('sha256');
  hash.update(str);
  return hash.digest('hex');
}

router.post("/", async (req,res) => {	//处理登陆请求，且实现token分发
	var userName = xss(req.body.userName);
	var passWord = sha256(xss(req.body.passWord));
//		console.log(userName, '+', passWord);
	var result = await databaseController.login(userName, passWord);
		console.log(result);
	if(result.code === 1){
		var token = jwt.sign(
			{
				identity: result.id,
				userName: result.userName,
			},
			secret,
			{expiresIn:"1h"},
		)
		console.log(token);
		res.send({code: 1, msg: "登陆成功", token:token});
	}else{
		if(req.headers.authorization == undefined || req.headers.authorization == null){
			if(req.headers.authorization){
				var token = req.headers.authorization.split("")[1];		//获取token
			}
			jwt.verify(token, "secret", (err, decode) => {
				if(err){
					res.send({code: 0, msg: "登陆失败"});
			}
			})
		}
    }
})

module.exports = router;
