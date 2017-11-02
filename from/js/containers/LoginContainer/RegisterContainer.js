/**
 * Created by jiangzz on 2017/7/25.
 * 注册界面
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import './LoginContainer.css';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button,Radio,message } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
import {hashHistory} from 'react-router';
import {getAuthCode,registerAction,checkCellphone} from '../../actions/LoginAction';

class RegisterContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            confirmDirty: false,
            RadioValue:'',
            cellPhone:'',
            disable:false,
            buttonTitle:'获取验证码',
            visible:false,
        };
    }

    componentWillReceiveProps(nextProps) {
        const {login} = nextProps;
        if(login.logined && !this.props.login.logined){
            window.location.href='#';
        }
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

        var itemView;
        if(this.state.RadioValue=='0'){
            itemView=<FormItem
                {...formItemLayout}
                label=""
                hasFeedback
            >
                {getFieldDecorator('companyname', {
                    rules: [{ required: true, message: '请输入你的公司名称!', whitespace: true }]
                })(
                    <Input placeholder="公司名称"/>
                )}
            </FormItem>
        }
        return (
            <div className="html_div_style">
                <div className='body_div_style registter_div_style'>
                    <div className="div_logo">
                        <img className="pic_area" src={require('./img/logo2.png')} onClick={this.backHomepage.bind(this)}/>
                        <div className="size-style">注册账号</div>
                    </div>
                    <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem
                            {...formItemLayout}
                            label=""
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '请输入11位的手机号!' ,len:11}]
                            })(
                                <Input onBlur={()=>{this.checkPhone()}} onChange={this.onChangeCellPhone.bind(this)} style={{ width: '100%' }} placeholder="手机号"/>
                            )}
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
                                <Input type="password" placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label=""
                            hasFeedback
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请输入确认密码!'
                                }, {
                                    validator: this.checkPassword.bind(this)
                                }]
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur.bind(this)} placeholder="确认密码"/>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label=""
                        >
                            <Row gutter={8}>
                                <Col span={15}>
                                    {getFieldDecorator('captcha', {
                                        rules: [{ required: true, message: '请输入你获取的验证码!' }],
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
                            style={{float:'left'}}
                        >
                            {getFieldDecorator('role', {
                                rules: [{ required: true, message: '请选择您注册角色!' }],
                            })(
                                <RadioGroup  onChange={this.RoleonChange.bind(this)}>
                                    <Radio value="1">个人</Radio>
                                    <Radio value="0">企业</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        {itemView}
                        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8,float:'left'}}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox classNmae="checkbox-form" onChange={this.onChangeCheckbox.bind(this)}>我已经阅读并同意 <a href="">《用户注册协议》</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button disabled={this.state.visible} type="primary" htmlType="submit" className="login-form-button">注册</Button>
                            <a className="login-form-forgot-register" onClick={this.registerButton.bind(this)}>登录</a>
                        </FormItem>
                    </Form>
                </div>
                <div className="forgot-font">郑州百灵电子技术股份有限公司</div>
            </div>
        );
    }

    /*不同意则不许注册*/
    onChangeCheckbox(e){
        if(e.target.checked==true){
            this.setState({visible:false})
        }else{
            this.setState({visible:true})
        }
    }

    onChangeCellPhone(e){
        this.setState({ cellPhone: e.target.value });
    }

    checkPhone(){
        if(this.state.cellPhone.length == 11){
            const {dispatch} = this.props;
            var params={Cellphone:this.state.cellPhone};
            dispatch(checkCellphone(params));
        }
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
                var name='臭皮匠';
                if(values.role=='0'){
                    name=values.companyname;
                }
                var params={Cellphone:values.phone,Password:values.password,Type:values.role,Name:name,AuthCode:values.captcha};
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
        dispatch(registerAction(params));
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

    /*角色选择*/
    RoleonChange(e){
        this.setState({RadioValue:e.target.value})
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

function mapStateToProps(state) {
    const {login} = state;
    return {
        login
    }
}
const RegisterContainerForm = Form.create()(RegisterContainer);
export default connect(mapStateToProps)(RegisterContainerForm);