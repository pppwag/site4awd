const express = require("express");
const router = express.Router();
const xss = require('xss');
const mysql = require('mysql');
var jwt = require('jsonwebtoken');
const databaseController = require('../controller/databaseController');

router.get("/", (req, res) => {		//登录页面
	filePath = 	path.join(__dirname,'../views/login.html');
	res.sendFile(filePath);
	console.log('[info]' + res.ip + ' requested: ' + filePath);
});

router.get("/adminlogin/", (req, res) => {	//假管理员登录，蜜獾
	filePath = 	path.join(__dirname,'../views/adminlogin.html');
	res.sendFile(filePath);
	console.log('[info]' + res.ip + ' requested: ' + filePath);
});

router.post("/login", (req,res) => {	//处理登陆请求，且实现token分发
	var userName = xss(req.body.userName);
	var passWord = xss(req.body.userName);
	var result = databaseController(userName, passWord);
	if(result.code === 1){
		var token = jwt.sign(
			{
				identity: result.id,
				userName: result.userName,
			},
			"secret",
			{expressIn:"1h"},
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
