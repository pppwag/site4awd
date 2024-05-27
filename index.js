let ep = require('express');

let app = new ep()

let userinfo = {
  code: 0,
  message: "这是默认消息",
  data: [] 
} 

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/getusers', (req, res) => {  
  console.log(userinfo)
  res.json(userinfo)
})

let encode = ep.urlencoded({ extended: false}) 
app.post('/userlogin', encode, (req, res) => {
  let username = req.body.username
  let password = req.body.password


if (!username) {
  
  userinfo.message = "数据不能为空";
  userinfo.code = -1;
} else {

  userinfo.data.push({ 
    "username": username,
    "password": password
  });
  if (username === 'admin') {
    userinfo.message = "欢迎你，管理员";
    userinfo.code = 200;
    return
  } else {
    userinfo.message = "欢迎你，普通用户";
    userinfo.code = 200;
    return
  }
}

    console.log(userinfo) 
    res.json(userinfo) 
})
app.use(ep.static("html")).listen(8080, function(){	
  console.log("Web Server is running at http://127.0.0.1:8080")
})