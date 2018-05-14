import axios from "axios";
import {Toast} from "antd-mobile";

//所有请求被拦截，使资源在被加载完成之前页面先显示loading弹窗
//拦截请求
axios.interceptors.request.use(function(config){
    Toast.loading('加载中...',0);
    return config;
})

//拦截响应
axios.interceptors.response.use(function(config){
    Toast.hide();
    return config;
})