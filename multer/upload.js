const multerConfig = require('./multerConfig');

const BaseURL = 'http://localhost:8080';
const imgPath = '/public/';

function uploadAvatar(req, res){
    return new Promise((resolve, reject) => {
        multerConfig.single('file')(req, res, function(err){
            if(err){
                reject(err);
            }else{
                resolve(BaseURL + imgPath + req.file.filename);
            }
        })
    })
}

module.exports = uploadAvatar;