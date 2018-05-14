const mongoose = require('mongoose');
//链接mongodb，并使用imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);

const models = {
    user:{
        'user': {type:String, 'require': true},
        'password': {type:String, 'require': true},
        'email': {type:String},
        'type': {type:String, 'require': true},
        //头像
        'avatar': {type:String},
        //简介
        'desc': {type:String},
        //职位
        'title': {type:String},
        //公司
        'company': {type:String},
        //薪资
        'money': {type:String}
    },
    chat: {

    }
}

for(let key in models){
    mongoose.model(key,new mongoose.Schema(models[key]));
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name);
    }
}