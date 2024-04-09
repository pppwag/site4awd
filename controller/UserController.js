const uploadAvatar = require('../multer/upload');

class UserController{
    async upload(req, res){
        try{
            const uploadRes = await uploadAvatar(req, res);
            res.send({
                meta:{code:200,msg:"上传成功！"},
                data:{img_url:uploadRes}
            })
        }catch(error){
            res.send(error);
        }
    }
}

module.exports = new UserController();