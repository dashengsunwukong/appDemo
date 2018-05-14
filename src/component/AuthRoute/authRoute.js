import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
@withRouter

class AuthRoute extends Component{
    componentDidMount(){
        const publicList = ['/login','/register'];
        const pathName = this.props.location.pathName;
        //如果当前页面是登录页面或者注册页面就不用获取用户信息了
        if(publicList.indexOf(pathName) > -1 ){
            return null;
        }
        //获取用户信息
        axios.get('/user/info').
        then(res=>{
            if(res.status == 200){
                if(res.data.code == 0 ){
                    //有登录信息
                }else{
                    this.props.history.push('./login');
                }
                console.log(res.data);
            }
         })
    }

    render(){
        return(
            <p>调试</p>
        )
    }
}

export default AuthRoute;