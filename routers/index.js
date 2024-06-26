const express = require("express");
const router = express.Router();	//注册路由模块
const databaseController = require('../controller/databaseController');

router.get("/", (req, res) => {		//处理默认目录get请求
	res.render('index.html');
	// console.log("[info] " + req.ip + " requested: index.html");
});

router.get("/about", (req, res) => {	//处理about目录get请求
	res.render('about.html');
	ip = req.ip
	// console.log("[info] " + req.ip + " requested: about.html");
});

router.get("/picture", (req, res) => {
		id = req.body.id;
		result = databaseController.search();
		res.send(path);
})

module.exports = router;		//暴露路由模块
