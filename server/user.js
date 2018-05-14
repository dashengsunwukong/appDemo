//所有与user有关的路由写在一起，暴露出去
const express = require('express');
const Router =express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})

Router.post('/register',function(req,res){
    const {user, password, email, type} = req.body;
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名已存在！'});
        }else{
            User.create({user,password,email,type},function(err,doc){
                if(err){
                    return res.json({code:1,msg:'出错了！'});
                }else{
                    return res.json({code:0});
                }
            });
        }
    })
})

Router.get('/info',function(req,res){
    return res.json({code: 1});
})

module.exports = Router;