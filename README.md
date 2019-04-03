# modal
react -antd-redux


切换到分支上进行查看。


import React from "react";
import {connect} from 'react-redux';
import {registerAction} from "../../actions/BaiDuAction"
class Baidu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            baidu:"百度"
        }
    }
    // getDefaultProps(){
    //     // 设置默认的props，也可以用dufaultProps设置组件的默认属性.
    //     console.log("getDefaultProps")
    // }



    // getInitialState(){
    //     // 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props
    //     console.log("getInitialState")
    // }


    componentWillMount(){
        console.log("componentWillMount")
        const {dispatch} = this.props;
        dispatch(registerAction());
        // 组件渲染之后调用，只调用一次。
    }
    render(){
        // react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。
        console.log("render")
        console.log(this.props.baidu)
        return (
            <input type='tetx' defaultValue={this.state.baidu} />
        )
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
        // 组件初始化时不调用，组件接受新的props时调用。
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps, nextState)
        return false
        // react性能优化非常重要的一环。
        // 组件接受新的state或者props时调用，
        // 我们可以设置在此对比前后两个props和state是否相同，
        // 如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，
        // 这样就不需要创造新的dom树和旧的dom树进行diff算法对比，
        // 节省大量性能，尤其是在dom结构复杂的时候
    }
    componentWillUpdata(nextProps, nextState){
        console.log(componentWillUpdata)
        // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
        // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        // 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。
    }
}
//链接
function mapStateToProps(state) {
    const {baidu} = state;
    return {
        baidu 
    }
}
export default connect(mapStateToProps)(Baidu);
