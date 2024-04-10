const express = require("express");
const router = express.Router();

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

})
module.exports = router;