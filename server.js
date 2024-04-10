const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const route = require("./routers/mainRoute");
const login = require("./routers/login");
const edit = require("./routers/edit");
const upload = require('./routers/upload');
const register = require('./routers/register');

app.use(cors());	//开启跨域支持
app.use(bodyParser.json());		//解析json表单
app.use(bodyParser.urlencoded({extended: true}));

//使用目录public注册静态资源
app.use('/public/', express.static('./public/'));

app.use("/", route);	//注册主页&关于页面路由
app.use("/login", login);	//注册登录页面路由
app.use('/register', register);	//注册页面路由
app.use('/upload', edit);	//注册上传页面路由
app.use('/upload/api', upload);


app.listen(8080, () => {
		console.log("running");
});

console.log('Server running at http://127.0.0.1:8080/');
