const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {		//登录页面
		res.send("login.html");
});

router.get("/adminlogin/", (req, res) => {	//假管理员登录，蜜獾
		res.send("wrong_password.html");
});

module.exports = router;
