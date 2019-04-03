import * as types from '../constants/ActionTypes';

export function registerAction(params) {
    return dispatch => {
        setTimeout(function(){
            console.log("请求")
            var obg={data:{data:1},key:'111'};
            dispatch(registerResult(obg))
        },1000)
        // requestAPI({
        //     path:'register',
        //     params:params
        // }).then((responseData) => {
        //     if(responseData.ret==0){
        //         message.success('注册成功!');
        //         dispatch(registerResult(responseData));
        //     }else{
        //         message.warning(responseData.rtmsg);
        //     }
        // })
    }
}

function registerResult(responseData) {
    return {
        type: types.BAIDU,
        rawData:responseData
    }
}