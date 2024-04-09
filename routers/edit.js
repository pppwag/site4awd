const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {		//上传页面
	filePath = 	path.join(__dirname,'../views/upload.html');
	res.sendFile(filePath);
	console.log('[info]' + res.ip + ' requested: ' + filePath);
});

module.exports = router;
