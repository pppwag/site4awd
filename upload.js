const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const UserController = require('../controller/UserController');

// 配置文件上传
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage });

// 验证 JWT token 的中间件
const verifyToken = (req, res, next) => {
    // 在这里验证 JWT token
    // 如果验证通过,将用户信息添加到 req 对象中
    req.user = { userId: 1, userName: 'example' };
    next();
};

// 上传图片接口
router.post('/', verifyToken, upload.single('file'), async (req, res) => {
    try {
        // 检查文件类型
        const allowedTypes = ['image/png', 'image/jpeg', 'image/gif'];
        if (!allowedTypes.includes(req.file.mimetype)) {
            return res.status(400).send({ code: 0, msg: '只允许上传图片文件' });
        }

        // 调用 UserController 的上传方法
        const result = await UserController.upload(req.user.userId, req.file);
        res.send(result);
    } catch (err) {
        console.error('上传图片发生错误:', err);
        res.status(500).send({ code: 0, msg: '上传图片失败' });
    }
});

module.exports = router;