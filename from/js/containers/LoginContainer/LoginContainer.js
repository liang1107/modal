/**
 * Created by jiangzz on 2017/7/25.
 * 登录界面
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import './LoginContainer.css';
import { Form, Icon, Input, Button, Checkbox,Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import { hashHistory } from 'react-router';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        // const {login} = nextProps;
        // if(login.logined && !this.props.login.logined){
        //     window.location.href='#';
        // }
    }

    render() {

        return (
            <div className="html_div_style">
              登录
            </div>
        );
    }





}



export default LoginContainer;