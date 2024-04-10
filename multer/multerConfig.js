const multer = require('multer');
const path = require('path');

const handlePath = (dir) => {
    return path.join(__dirname,'./',dir);
}

const storage = multer.diskStorage({
    //存储路径
    destination:function(req, file, cb) {
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
            cb(null, handlePath('../public'));
        }else{
            cb({error:"不支持该图片格式！"});
        }
    },
    //存储名称
    filename:function(req, file, cb){
        const fileFormat = file.originalname.split('.');
        cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
});

const multerConfig = multer({
    storage: storage,
    limits:{fileSize: 20971520}     //20M文件大小限制
});

module.exports = multerConfig;