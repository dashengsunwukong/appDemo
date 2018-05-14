const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
//引入user的路由
const userRouter = require('./user.js');

const app = express();
//可以解析cookie
app.use(cookieParser());
//可以解析post发过来的json
app.use(bodyParser.json());
//启用一个中间件，所有url带有/user的都是用这个中间件
app.use('/user',userRouter);
app.listen(9093,function(){
    console.log('Node app start at port 9093!');
});