const uploadApi = require('../multer/upload');
const databaseController = require('./databaseController')

class UserController{
    async upload(req, res){
        try{
            const uploadRes = await uploadApi(req, res);
            id = databaseController.insert(uploadRes);
            res.send({
                meta:{code:200,msg:"上传成功！"},
                data:{img_url:uploadRes},
            })
        }catch(error){
            res.send(error);
        }
    }
}

module.exports = new UserController();