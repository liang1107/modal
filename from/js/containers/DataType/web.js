import React,{Component} from "react";
import { Modal, Button ,Input,Table ,Tree,Popconfirm,Spin } from 'antd';
import {connect} from 'react-redux';
import TreeModal from './treendatamm'
import ScreenForm from './search'
import "./web.css";
var data1={
	"name":"View测试",//功能名称
	"tree":{
		"type":"0",//0为一次性加载数据，1为异步加载数据
		'name':'树状分裂',
		"url":"App/treeData",
		"request":{
			"type":"test",//常量，用于向后台提交一些固定参数
			"id":"$branchId"//变量，异步申请数据需要提交的数据，第一次申请不填即可
		}
	},
	"table":{
		'name':'table表',
		"col":{//'a'为获取数据的字段名，'字段a'为列表展示名称
			"a":"字段a",
			"b":"字段b",
			"c":"字段c",
			"d":"字段d",
			"e":"字段e"
		},
		"type":{//有特殊字段需要特别展示方式的注明，未注明的默认展示方式
			"b":"url",
			"c":"img"
		},
		"hide":["c","e"],//列表中不展示的字段，只在modal中展示
		"fun":{//操作栏，没有内容则不展示操作栏	
		},
		'columns':[
			{title: '资料类型名称',dataIndex: 'name',type:'text'},
			{title: '上传资料类型',dataIndex: 'data',type:'text'},
			{title: '最近操作时间',dataIndex: 'time',type:'text'},
			{title:'操作',dataIndex:'cao'}
		],
		'hided':[
			{dataIndex:'name'},
			{dataIndex:'cao'}
		]
	},
	"order":{//排序方式

	},
	"search":{//搜索条件
		data:[
			{type:'input',placeholder:'搜索内容',num:[{placeholder:'人名'}]},
			{type:'select',data:['hong','green','blue'],num:[['我的','他的','你的'],[1,2,3]]},
			{type:'time'}
		
		
	
		]
	},
	"button":{add:true,delete:true,qita:
		[{name:'导出',active:function(){console.log('daochu')},type:'primary'}]//功能按钮

	},
	"modal":{//是否需要独立定义，可根据table相关数据

	}
}

const TreeNode = Tree.TreeNode;
var that
class Web extends Component{
	constructor(props){
        super(props)
        this.state={
        	selectedRowKeys:[],
        	title:"",
        	visible:false,
        	chu:[],
			num:1,
			zhan:['0'],
			sortedInfo: null,
				}
    }
	 componentWillMount(){
  
			
		}
		componentDidMount(){
			var columns=data1.table.columns;
			for(let i in columns){
				columns[i].key=columns[i].dataIndex;
				if(columns[i].dataIndex=='cao'){
					columns[i].render=(text,record,index) => (
						<div>
						   <a onClick={()=>this.xiu(text,record,index)}>修改</a>
						   <span className="ant-divider"/>
						   <Popconfirm title="确定删除吗?" onConfirm={()=>this.deta(text, record, index)}>
							   <a >删除</a>
						   </Popconfirm>
					   </div>
					)
				}
				
			}
			console.log(columns,"biaotou")
			this.setState({columns:columns})
			for(let i in columns){
				var zhen=true;
				for (let j in data1.table.hided){
					console.log(data1.table.hided[j].dataIndex)
					if(zhen){
						if(data1.table.hided[j].dataIndex==columns[i].dataIndex){
							console.log(i)
							columns.splice(i,1)
							console.log(columns,"aaaaa")
							zhen=false;
							i--;
						}
					}
					
				}
			}
		}
	render(){
		that=this
		const { selectedRowKeys } = this.state;
		let { sortedInfo, filteredInfo } = this.state;
		sortedInfo = sortedInfo || {};
		// const columns=[
		// 	{title: '资料类型名称',dataIndex: 'name',key: 'name',type:'text'},
		// 	{title: '上传资料类型',dataIndex: 'data',key: 'data',type:'text'},
		// 	{title: '最近操作时间',dataIndex: 'time',key: 'time',
		// 	sorter: (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
			
		// },
		// 	{title:'操作',key:'cao',
		// 	 render: (text,record,index) => (
		// 	 	<div>
		// 			<a onClick={()=>this.xiu(text,record,index)}>修改</a>
		// 			<span className="ant-divider"/>
		// 			<Popconfirm title="确定删除吗?" onConfirm={()=>this.deta(text, record, index)}>
		// 				<a >删除</a>
		// 			</Popconfirm>
		// 		</div>
		// 	 ),}
		// ];
		var columns=this.state.columns;
		const data2={inputtext:columns}
		const rowSelection = {
		      selectedRowKeys,
		      onChange: this.onSelectChange.bind(this),
		    };
		//模拟数据

		var data=[
			      {name:'党风廉政建设',data:'文件',time:'2017/1/3'},
			      {name:'影音资料',data:'视频',time:'2017/1/1'},
			      {name:'党务范文',data:'文件',time:'2017/1/2'},
			  ];
		
		//按钮
		var arr=[];
		var butt=data1.button
		if(butt.delete){
			arr.push(<Button key='1' type="danger" disabled={!this.state.selectedRowKeys.length}  
			onClick={()=>this.delete()}style={{marginLeft:10}}>删除</Button>)
		}
		if(butt.add){
			arr.push(<Button key='2' type="primary" style={{marginLeft:10}} onClick={this.add.bind(this)}>新增</Button>)
		}
		for(var a in butt.qita){
			arr.push(
				<Button key={a} type={butt.qita[a].type} style={{marginLeft:10}} onClick={butt.qita[a].active}>{butt.qita[a].name}</Button>
			)
		}
		var chu=[]
		
		if(false){
			return (
				<div className='loadingbox'>
					<Spin size="large" />
				</div>
			)
		}else{
		return(
			<div>
				<div className="head">{data1.name}
					<div className="floatR">
						<ScreenForm data={data1.search} search={this.search.bind()}/>
					</div>
				</div>
				<div className='contentn'>
					{data1.tree?
					(<div className="zuo">
						<div className='zuoheader'>{data1.tree.name}</div>
							<TreeModal key='1' zhan={this.state.zhan} type='DataList'  select={(selectedKeys, e)=>this.selectclick(selectedKeys, e)} />
					</div>):''}
					<div className={data1.tree?'main20':'main100'}>
						<div className='zuoheader'>{data1.table.name}</div>
						<div className="main1">
								{arr}	
						</div>
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
						<Modal
							title={this.state.title}
							visible={this.state.visible}		        
							onCancel={this.handleCancel.bind(this)}
							footer={null}
							key={this.state.num}
							>
							我是弹出框
									
						</Modal>
					</div>
				</div>
			</div>
		)}
	}
	add(){
		
		var num=Math.random()
		this.setState({
			visible:true,
			title:'新增',
			num:num,
			chu:{}
		})
		console.log("点击了添加",num)
	}
	handleCancel(){
		this.setState({
            visible:false
        })
	}
	
	delete(){
		console.log("点击了删除",this.state.selectedRowKeys)
		
	}
	dao(){
		console.log("导出")
	
	}
	search(value){
		console.log(value,"查找web")
	}
	xiu(text, record, index){
		var num=Math.random()
		console.log(num,"随机key")
		console.log(text, record, index,"修改")
		this.setState({chu:record,title:'修改', visible:true,num:num});	
	}
	getvalue(index){
		console.log("点击了表单的提交")
		console.log(index)
	}
	deta(text, record, index){
		console.log(text, record, index,"删除")
	}
	onSelectChange(selectedRowKeys){
			console.log('selectedRowKeys changed: ', selectedRowKeys);
   				 this.setState({ selectedRowKeys });
		}
		//点击树状列表请求数据
	selectclick(selectedKeys, e){
		this.setState({
			zhan:selectedKeys
		})
		//进行数据请求用的到的selectedKeys
		console.log(selectedKeys)
	}	
	
}
function mapStateToProps(state) {
    const {} = state;
    return {
			
    }
}
export default connect(mapStateToProps)(Web);