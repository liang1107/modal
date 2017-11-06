import React from "react";
import { Modal, Button } from 'antd';

import Form from './Form'
var that=this
class HomeContainer extends React.Component{
	
    constructor (props){
        super(props)
        this.state={
            visible:true,
            value:"2"
        }
    }
    componentWillMount(){
    	console.log('componentWillMount')
    		that=this
    }
	componentDidMount(){
	
		console.log(this.refs.form.state.value,"得到的value值")
		console.log(this.state.value)
		
	}
    render(){
    	var data={layout:'horizontal',datepicker:"不为空",
    	inputtext:[
    	{label:'用户名',required:"不为空",message:"请输入用户名",placeholder:"请输入用户名",obgkey:'username',type:"text"},
    	{label:'账户',required:"",message:"请输入账户",placeholder:"请输入账户",obgkey:'1',type:"password",},
    	{label:'textswitch',required:"",message:"请输入账户",obgkey:'switch',type:"switch",},
    	{label:'数字',required:"",message:"请填写数字",placeholder:"请填写数字",obgkey:'num',type:"number",min:1,max:100},
    	{label:'文本框',required:"",message:"文本",placeholder:"文本",obgkey:'textarea',type:"textarea",cols:'4',rows:'4',},
    	],
    	Select:[
    	{label:'城市',required:"true",message:"请选择城市",placeholder:"请选择城市",obgkey:'select',
    	Option:[{value:'china',text:'中国'},{value:'use',text:'美国'},{value:'guba',text:"古巴"}]
    	},
    	{label:'水果',required:"",message:"请选择水果",placeholder:"请选择水果",obgkey:'selectapple',mode:"multiple",
    	Option:[{value:'apple',text:'苹果'},{value:'orange',text:'橘子'},{value:'li',text:"梨"}]
    	}
    	
    	],
    	radio:[
    	{label:'城市1',required:"true",message:"请选择城市",placeholder:"请选择城市",obgkey:'radio',
    	Option:[{value:'china',text:'中国'},{value:'use',text:'美国'},{value:'guba',text:"古巴"}]
    	},
    	{label:'水果1',required:"",message:"请选择水果",placeholder:"请选择水果",obgkey:'radio2',
    	Option:[{value:'apple',text:'苹果'},{value:'orange',text:'橘子'},{value:'li',text:"梨"}]}
    	],
    	
    	}
    	var chu={
    		username:'初始化',
    		"1":"123123",
    		switch:true,
    		num:23,
    		textarea:'初始化的内容'
    	}
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>Open</Button>
                <Modal
                    title="表单"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}

                >
                    
                        <Form data={data} value={(index)=>this.getvalue(index)} chu={chu} ref='form'/>
                </Modal>
            </div>


        )
    }
    showModal(){
        console.log("展示模态框")
        this.setState({
            visible:true
        })
    }
    handleCancel(){
        console.log("关闭")
        this.setState({
            visible:false
        })
    }
    handleOk(){
        console.log("点击了ok")
    }
    getvalue(val){
    	console.log(val,"参数")
    	that.setState({
    		value:val
    	})
    }
}
export default HomeContainer