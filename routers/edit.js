const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {		//上传页面
	res.render('upload.html');
	console.log('[info]' + req.ip + ' requested: upload.html');
});

module.exports = router;
