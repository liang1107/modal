import React from "react";
import { Modal, Button } from 'antd';
import {hashHistory,Link} from "react-router"

import Form from './Form'
import BarReact from './BarReact'
import {Map,Marker,InfoWindow, NavigationControl, MapTypeControl, ScaleControl, OverviewMapControl} from 'react-bmap'
import Edit from './Logo'
import './main.scss'
var that=this
class HomeContainer extends React.Component{
	
    constructor (props){
        super(props)
        this.state={
            visible:false,
            value:"2"
        }
    }
    componentWillMount(){
    	console.log('componentWillMount')
    		that=this
    }
	componentDidMount(){
	
//		console.log(this.refs.form.state.value,"得到的value值")
		console.log(this.state.value)
		
	}
    render(){
    	var title="用户名二"
    	var data={layout:'horizontal',datepicker:"不为空",
    	inputtext:[
    	{title:title,required:"不为空",message:"请输入用户名",placeholder:"请输入用户名",dataIndex:'username',type:"text"},
    	{title:'账户',required:"",message:"请输入账户",placeholder:"请输入账户",dataIndex:'1',type:"password",},
    	{title:'textswitch',required:"",message:"请输入账户",dataIndex:'switch',type:"switch",},
    	{title:'数字',required:"",message:"请填写数字",placeholder:"请填写数字",dataIndex:'num',type:"number",min:1,max:100},
    	{title:'文本框',required:"",message:"文本",placeholder:"文本",dataIndex:'textarea',type:"textarea",cols:'4',rows:'4',},
    	{title:'城市',required:"true",message:"请选择城市",placeholder:"请选择城市",dataIndex:'select',type:"Select",
    	Option:[{value:'china',text:'中国'},{value:'use',text:'美国'},{value:'guba',text:"古巴"}]
    	},
    	{title:'水果',required:"",message:"请选择水果",placeholder:"请选择水果",dataIndex:'selectapple',mode:"multiple",type:"Select",
    	Option:[{value:'apple',text:'苹果'},{value:'orange',text:'橘子'},{value:'li',text:"梨"}]
	    },
	    {title:'城市1',required:"true",message:"请选择城市",placeholder:"请选择城市",dataIndex:'radio',type:'Radio',
    	Option:[{value:'china',text:'中国'},{value:'use',text:'美国'},{value:'guba',text:"古巴"}]
    	}
    	],}
    	var chu={
    		username:'初始化',
    		"1":"123123",
    		switch:true,
    		num:23,
    		textarea:'初始化的内容',
    		select:'use',
    		radio:'china'
    	}
    	var op={
			    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    legend: {
			        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
			    },
			    toolbox: {
			        show: true,
			        orient: 'vertical',
			        left: 'right',
			        top: 'center',
			        feature: {
			            mark: {show: true},
			            dataView: {show: true, readOnly: false},
			            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			            restore: {show: true},
			            saveAsImage: {show: true}
			        }
			    },
			    calculable: true,
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {show: false},
			            data: ['2012', '2013', '2014', '2015', '2016']
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value'
			        }
			    ],
			    series: [
			        {
			            name: 'Forest',
			            type: 'bar',
			            barGap: 0,
			            
			            data: [320, 332, 301, 334, 390]
			        },
			        {
			            name: 'Steppe',
			            type: 'bar',
			            
			            data: [220, 182, 191, 234, 290]
			        },
			        {
			            name: 'Desert',
			            type: 'bar',
			            
			            data: [150, 232, 201, 154, 190]
			        },
			        {
			            name: 'Wetland',
			            type: 'bar',
			           
			            data: [98, 77, 101, 99, 40]
			        }
			    ]
			};
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>Open</Button>
                <Button type="primary" onClick={this.showModal1.bind(this)}>Personal</Button>
                <BarReact option={op}/>
                <Modal
                    title="表单"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}

                >
                    
                        <Form data={data} value={(index)=>this.getvalue(index)} chu={chu} ref='form'/>
                       <Map center={{lng: 116.402544, lat: 39.928216}} zoom="12">
		            <Marker position={{lng: 116.402544, lat: 39.928216}} />
		            <NavigationControl />
		            <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
		        </Map> 
                </Modal>
                <Map center={{lng: 116.402544, lat: 39.928216}} zoom="12">
		            <NavigationControl />
		            <MapTypeControl />
		            <ScaleControl />
		            <OverviewMapControl />
		             <Marker position={{lng: 116.402544, lat: 39.928216}} />
		            <NavigationControl />
		            <InfoWindow position={{lng: 116.402544, lat: 39.928216}} text="内容" title="标题"/>
		        </Map>
		        <Edit/>
		        <div className='scss'>
		        	<div>scss</div>
		        </div>
            </div>


        )
    }
    showModal(){
        console.log("展示模态框")
        console.log(this.props)
        const {router} =this.props
        router.push({pathname:"IndividualService",query:{wudi:"123"}})
//       hashHistory.push({
//         pathname:"/IndividualService",
//         query:{
//             pay:"pay"
//         }
//     })

//      this.setState({
//          visible:true
//      })
    }
    showModal1(){
    	const {router} =this.props
        router.push({pathname:"Personal",query:{wudi:"123"}})
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