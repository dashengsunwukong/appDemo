import axios from 'axios';
import {getRedirectPath} from '../util';

const REGISTER_SUCCESS = 'REGISTER_SUCCES';
const ERROR_MSG = 'ERROR_MSG';

const initState = {
    redirectTo: '',
    isAuth: false,
    msg: '',
    user: '',
    password: '',
    email: '',
    type: ''
}

//reducer
export function user(state = initState,action){
    switch(action.type){
        case REGISTER_SUCCESS:
            return Object.assign(state,{isAuth:true,redirectTo:getRedirectPath(action.data)},action.data)
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg}
        default: return state;
    }
    return state;
}

function errorMsg(msg){
    return {type:ERROR_MSG,msg: msg}
}

function registerSuccess(data){
    return {type: REGISTER_SUCCESS,data: data}
}

export function register({user,password,repeatpwd,email,type}){
    if(!user || !password || !repeatpwd || !email){
        return errorMsg('请输入完整的信息！')
    }
    if(password != repeatpwd){
        return errorMsg('两次输入的密码不一致！')
    }
    return dispatch => {
        // axios.post('/user/register',{user,password,email,type}).
        // then((res)=>{
        //     if(res.status == 200 && res.data.code === 0){
                 dispatch(registerSuccess({user,password,email,type}));
        //     }else{
        //         dispatch(errorMsg(res.data.msg));
        //     }
        // })
    }
    alert('aaa');
}