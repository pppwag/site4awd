# site4awd
A website demo for CTF game

## 路由

    /  
文件位于：routers/mainRoute.js  
GET方法，主页，显示图片。

    /login  
文件位于：routers/login.js  
GET方法，显示登陆页面。POST方法，提交登录信息，成功code: 1返回token，失败code: 0返回错误。

    /register  
文件位于：routers/register.js  
GET方法，显示注册页面。POST方法，提交注册信息，成功code: 1跳转登陆页，失败code: 0返回错误。

    /upload  
文件位于：routers/edit.js  
GET方法，显示上传页面，实际没有任何接口。

    /upload/api  
文件位于：routers/upload.js  
POST方法，真实上传接口，接受key为file的png/jpeg/gif文件上传,**要求JWT鉴权**。


## 数据库

    database/userDBconn.js  
    database/picDBconn.js  
分别打开用户数据库和图片数据库连接。

    database/dbInsert.js  
    database/dbLogin.js  
    database/dbRegister.js  
    database/dbSearch.js  
    database/dbVerify.js  

分别负责图片插入，登陆，注册，图片查询，验证登陆。   

### 前端图片查询接口使用控制器对象databaseController的search方法，参数指定图像id，缺省则查询所有图像。
    //返回数据库查询得到的所有图片信息
    databaseCintroller.search();
    //返回指定id查询得到的图片信息
    databaseController.search(id);

## 部署
首先配置数据库：

    database/userDBconn.js  
    database/picDBconn.js  
然后启动应用：

    .../site4awd/$ npm install
    .../stie4awd/$ node app.js

#### Par1y
