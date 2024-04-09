const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {		//上传页面
		res.send("upload.html");
});

module.exports = router;
