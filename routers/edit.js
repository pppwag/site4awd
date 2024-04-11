const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res) => {		//上传页面
	const filePath = path.join(__dirname,'../views/upload.html');
	res.sendFile(filePath);
	console.log('[info]' + req.ip + ' requested: ' + filePath);
});

module.exports = router;
