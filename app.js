// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const app = express();
const index = require("./routers/index");
const login = require("./routers/login");
const edit = require("./routers/edit");
const upload = require('./routers/upload');
const register = require('./routers/register');

const userController = require('./controllers/userController');

app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public/'));

app.use("/", index);
app.use("/login", login);
app.use('/register', register);
app.use('/upload', edit);
app.use('/upload/api', upload);

// 注册错误处理中间件
app.use(errorHandler);

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}

app.listen(8080, () => {
    console.log("running");
});

console.log('Server running at http://127.0.0.1:8080/');