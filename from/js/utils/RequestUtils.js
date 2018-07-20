'use strict';
import { message } from 'antd';
import * as data from '../constants/VirtualData';
import * as data1 from "../constants/VirtualData1"
import GlobalVariable from '../constants/GlobalVariable';
import 'whatwg-fetch';
export function request(url, method, body, headers) {
  var isOk;
  return new Promise((resolve, reject) => {

    resolve(getResponseData(url));
  })
}

function getResponseData(url) {
    if (url.indexOf("logined") > 0)
        return data.LOGIN_DATA;
    else if (url.indexOf("menu") > 0)
        return data.MAIN_MENU_DATA;
    else if (url.indexOf("workTrend") > 0)
        return data.WORKTREND_DATA;
    else if (url.indexOf("supervisionContentList") > 0)
        return data.NOTICECONTENTLIST;
}

export function requestAPI(params) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };

    const token = localStorage.getItem('accessToken');

    if (token) {
        headers['Token'] = token;
    }
    let method ='GET';
    if(typeof params.params ==='undefined' || typeof params.params ==='string'){
        method =  'GET';
    }else {
        method =  'POST';
    }

    const requestParams = {
        method,
        headers: new Headers(headers)
    };
    console.log(method);
    if (method == 'POST' ) {
        requestParams.body = JSON.stringify(params.params || {});
    }

  return new Promise((resolve, reject) => {
    fetch(GlobalVariable.IP + params.path || '', requestParams)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {

            if(responseData.token != undefined){
                localStorage.setItem("accessToken", responseData.token);
            }
            if(responseData.ret==0){
                resolve(responseData);
            }else if(responseData.ret==-1){
                message.warning('登录失效，请重新登录', 5);
                //resolve(responseData);
                //window.location.href='/index';
            }else{
               /* if(typeof responseData.rtmsg !='undefined' && responseData.rtmsg !=''){
                    message.warning(responseData.rtmsg);
                }else {*/
                    resolve(responseData);
               // }
            }

        }).catch((error) => {
        resolve(error);
        message.warning('连接服务器失败，请稍候重试');
    });
  })
}


export function uploadFileAPI(params) {
    const headers = {};
    const token = localStorage.getItem('accessToken');

    if (token) {
        headers['Token'] = token;
    }
    const requestParams = {
        method: 'POST',
        headers: new Headers(headers)
    };
        
    var formData  = new FormData();
    formData.append('file', params.file);

    requestParams.body =formData;

    return new Promise((resolve, reject) => {

        fetch(GlobalVariable.IP + params.path || '' , requestParams)
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                resolve(responseData);
            });
    })
}