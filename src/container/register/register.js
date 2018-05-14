import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Logo from '../../component/Logo/logo';
import {List, InputItem, WhiteSpace, WingBlank, Button, Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from '../../redux/user.redux';

const RadioItem = Radio.RadioItem;
@connect(
    state=>state.user,
    {register}
)
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            password: '',
            repeatpwd: '',
            email: '',
            type: 'person'
        }
        this.register = this.register.bind(this);
    }

    handleChange(key,val){
        this.setState({
            [key]: val
        })
    }

    register(){
        this.props.register(this.state);
    }
    
    render(){
        console.log('sasasasa',this.state)
        return (
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {this.props.msg ? <p>{this.props.msg}</p> : null}
                        <InputItem onChange={(v)=>this.handleChange('user',v)}>用户</InputItem>
                        <InputItem type='password' onChange={(v)=>this.handleChange('password',v)}>密码</InputItem>
                        <InputItem type='password' onChange={(v)=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                        <InputItem onChange={(v)=>this.handleChange('email',v)}>邮箱</InputItem>
                        <RadioItem checked={this.state.type == 'boss'} onChange={()=>this.handleChange('type','boss')}>企业</RadioItem>
                        <RadioItem checked={this.state.type == 'person'} onChange={()=>this.handleChange('type','person')}>个人</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register;