import * as types from '../constants/ActionTypes';
import {LOGIN_URL} from '../constants/Network';
import { request,requestAPI } from '../utils/RequestUtils';
import { message } from 'antd';
import { hashHistory } from 'react-router';

/*export function login(token){
    return dispatch => {
        dispatch(loginingResult());//正在获取数据，进度条提示
        let body = JSON.stringify({
            token: token
        });
        return request(LOGIN_URL, 'post', body, {'Accept': 'application/json', 'Content-Type': 'application/json',})
            .then((responseData) => {
                dispatch(loginedResult(responseData));
            })
            .catch((error) => {
                console.error('fetchAnswer error: ' + error);
                dispatch(loginedResult([]));
            })
    }
}*/
export function login(params) {
    return dispatch => {
        dispatch(loginingResult());//正在获取数据，进度条提示
        requestAPI({
            path:'login',
            params:params
        }).then((responseData) => {
            if(responseData.ret==0){
                console.log(responseData);
                message.success('登录成功!');
                dispatch(loginedResult(responseData));
            }else{
                message.warning(responseData.rtmsg);
            }
        })
    }
}

function loginingResult() {
    return {
        type: types.LOGINING_RESULT
    }
}

function loginedResult(responseData) {
    return {
        type: types.LOGINED_RESULT,
        rawData:responseData
    }
}

export function logout(){
    return {
        type: types.LOGOUT_RESULT
    }
}

export function checkCellphone(params){
    return dispatch => {
        requestAPI({
            path:'checkPhone',
            params:params
        }).then((responseData) => {
            if(responseData.ret!=0){
                message.warning(responseData.rtmsg);
            }
        })
    }
}

export function getAuthCode(params) {
    return dispatch => {
        requestAPI({
            path:'authCode',
            params:params
        }).then((responseData) => {
            if(responseData.ret==0){
                message.success('获取验证码成功!');
                dispatch(getAuthCodeResult(responseData));
            }else if(responseData.ret==-5){
                message.warning('已获取验证码,请一分钟后再试!');
            } else {
                message.warning('获取验证码失败,请重试!');
            }
        })
    }
}

function getAuthCodeResult(responseData) {
    return {
        type: types.GET_AUTHCODE_RESULT,
        rawData:responseData
    }
}

export function registerAction(params) {
    return dispatch => {
        requestAPI({
            path:'register',
            params:params
        }).then((responseData) => {
            if(responseData.ret==0){
                message.success('注册成功!');
                dispatch(registerResult(responseData));
            }else{
                message.warning(responseData.rtmsg);
            }
        })
    }
}

function registerResult(responseData) {
    return {
        type: types.REGISTER_RESULT,
        rawData:responseData
    }
}

export function resetPassword(params){
    return dispatch => {
        requestAPI({
            path:'changePassword',
            params:params
        }).then((responseData) => {
            if(responseData.ret==0){
                message.success('密码重置成功');
                hashHistory.push("LoginContainer");
            }else {
                message.warning(responseData.rtmsg);
            }
        })
    }
}