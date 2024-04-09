const path = require('path');
const express = require("express");
const router = express.Router();	//注册路由模块

router.get("/", (req, res) => {		//处理默认目录get请求
	const filePath = path.join(__dirname,'../views/index.html');
	res.sendFile(filePath);
	console.log("[info] " + req.ip + " requested: " + filePath);
});

router.get("/about", (req, res) => {	//处理about目录get请求
	const filePath = path.join(__dirname,'../views/about.html');
	res.sendFile(filePath);
	ip = req.ip
	console.log("[info] " + req.ip + " requested: " + filePath);
});

module.exports = router;		//暴露路由模块
