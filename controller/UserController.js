const uploadApi = require('../multer/upload');
const databaseController = require('./databaseController')
var jwt = require('jsonwebtoken');

class UserController {
    async upload(req, res) {
        try {
            // 检查请求头中是否包含 Authorization 字段
            if (!req.headers.authorization) {
                return res.status(401).json({ code: 0, msg: "未提供授权信息" });
            }

            // 从 Authorization 字段中提取 token
            const token = req.headers.authorization.split(" ")[1];

            // 验证 token
            jwt.verify(token, "secret", (err, decode) => {
                if (err) {
                    return res.status(401).json({ code: 0, msg: "无法鉴权" });
                }
                if (decode) {
                    // 如果验证通过，从解码后的信息中获取用户ID和用户名
                    const id = decode.id;
                    const name = decode.userName;

                    // 调用数据库控制器的 verify 方法，这里假设 verify 是一个异步方法
                    databaseController.verify(id, (err, isValid) => {
                        if (err || !isValid) {
                            return res.status(403).json({ code: 0, msg: "用户权限不足" });
                        }

                        // 调用上传 API 完成上传操作
                        uploadApi(req, res, async (uploadRes) => {
                            // 插入数据到数据库，假设 insert 也是一个异步方法
                            try {
                                const insertedId = await databaseController.insert(uploadRes);
                                res.status(200).json({
                                    meta: { code: 200, msg: "上传成功！" },
                                    data: { img_url: uploadRes, user_id: insertedId },
                                });
                            } catch (error) {
                                res.status(500).json({ code: 0, msg: "服务器错误", error });
                            }
                        });
                    });
                }
            });
        } catch (error) {
            res.status(500).json({ code: 0, msg: "服务器错误", error });
        }
    }
}


module.exports = new UserController();