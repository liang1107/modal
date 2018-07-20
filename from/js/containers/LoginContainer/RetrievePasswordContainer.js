/**
 * Created by jiangzz on 2017/8/2.
 * 忘记密码 界面
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import './LoginContainer.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,Radio,message } from 'antd';
const FormItem = Form.Item;
import {hashHistory} from 'react-router';
import {getAuthCode,resetPassword} from '../../actions/LoginAction';

class RetrievePasswordContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            confirmDirty: false,
            RadioValue:'',
            cellPhone:'',
            disable:false,
            buttonTitle:'获取验证码'
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },/*调整form表单框宽度*/
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 24,/*调整注册按钮宽度*/
                    offset: 0,/*调整注册按钮的位置*/
                }
            }
        };

        return (
            <div className="html_div_style">
                <div className='body_div_style Retrieve_Password_div_style'>
                    <div className="div_logo">
                        <img className="pic_area" src={require('./img/logo2.png')} onClick={this.backHomepage.bind(this)}/>
                        <div className="size-style">找回密码</div>
                    </div>
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem
                            {...formItemLayout}
                            label=""
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '请输入11位的手机号!',len:11 }]
                            })(
                                <Input style={{ width: '100%' }} placeholder="输入手机号" onChange={this.onChangeCellPhone.bind(this)}/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label=""
                        >
                            <Row gutter={8}>
                                <Col span={15}>
                                    {getFieldDecorator('captcha', {
                                        rules: [{ required: true, message: '请输入你获取的验证码!' }]
                                    })(
                                        <Input size="large" placeholder="手机验证码"/>
                                    )}
                                </Col>
                                <Col span={9}>
                                    <Button size="large" disabled={this.state.disable} onClick={this.getAuthCode.bind(this)}>{this.state.buttonTitle}</Button>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label=""
                            hasFeedback
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: '请输入至少6位的密码!',min:6
                                }, {
                                    validator: this.checkConfirm.bind(this)
                                }]
                            })(
                                <Input type="password" placeholder="输入新密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label=""
                            hasFeedback
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请再次输入新密码!'
                                }, {
                                    validator: this.checkPassword.bind(this)
                                }]
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} placeholder="确认新密码"/>
                            )}
                        </FormItem>

                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" className="login-form-button">完成</Button>
                        </FormItem>
                    </Form>
                </div>
                <div className="forgot-font">郑州百灵电子技术股份有限公司</div>
            </div>
        );
    }

    onChangeCellPhone(e){
        this.setState({ cellPhone: e.target.value });
    }

    getAuthCode(){
        if(this.state.cellPhone.length == 11){
            let val = 60;
            //开启定时器 1秒一次
            this.timer = setInterval(
                () => {
                    val=val-1;
                    if (val == 0) {
                        this.setState({disable:false,buttonTitle:'获取验证码'});
                        //停止定时器
                        clearInterval(this.timer);
                        this.timer = undefined;
                    }else {
                        this.setState({disable:true,buttonTitle:val+'s后再次获取!'});
                    }
                },
                1000
            );
            const {dispatch} = this.props;
            var params={Cellphone:this.state.cellPhone};
            dispatch(getAuthCode(params));
        }else {
            message.warning('请输入11位的手机号!');
        }
    }

    /*提交方法*/
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var params={Cellphone:values.phone,Password:values.password,AuthCode:values.captcha};
                this.submit(params);
            }
        });
    }
    submit(params){
        clearInterval(this.timer);
        this.timer = undefined;
        this.setState({disable:false,buttonTitle:'获取验证码',cellPhone:''});
        //提交成功之后清空数据
        this.props.form.resetFields();
        const {dispatch} = this.props;
        dispatch(resetPassword(params));
    }
    /*确认密码 文本框监听回调*/
    handleConfirmBlur(e){
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    /*确认密码的校验回调*/
    checkPassword(rule, value, callback){
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('输入的两个密码不一致!');
        } else {
            callback();
        }
    }
    /*密码的校验回调*/
    checkConfirm (rule, value, callback){
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    /*登录按钮*/
    registerButton(){
        hashHistory.push("LoginContainer");
    }

    /*点击logo返回首页*/
    backHomepage(){
        window.location.href='#';
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    }
}

const RetrievePasswordContainerForm = Form.create()(RetrievePasswordContainer);
export default connect()(RetrievePasswordContainerForm);