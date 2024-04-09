const express = require("express");
const router = express.Router();	//注册路由模块

router.get("/", (req, res) => {		//处理默认目录get请求
		res.send("index.html");
});

router.get("/about", (req, res) => {	//处理about目录get请求
		res.send("about.html");
});

module.exports = router;		//暴露路由模块
