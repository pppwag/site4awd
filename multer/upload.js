const multerConfig = require('./multerConfig');

const BaseURL = 'http://localhost:8080';
const imgPath = '/public/';

function uploadApi(req, res){
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

module.exports = uploadApi;