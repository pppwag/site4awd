const express = require('express');
const app = express();
const route = require("./mainRoute");
const login = require("./login");
const edit = require("./edit");

app.use("/res",express.static("resources"));	//注册静态资源/res

app.use("/", route);	//注册主页&关于页面路由
app.use("/login", login);	//注册登录页面路由
app.use('/upload', edit);	//注册上传页面路由

app.listen(8080, () => {
		console.log("running");
});

console.log('Server running at http://127.0.0.1:8080/');
