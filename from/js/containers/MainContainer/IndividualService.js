import React,{Component} from "react";
import { Modal, Button ,Input,Table } from 'antd';

import Form from './Form'
import "./IndividualService.css"
const Search = Input.Search;
var that=this
class IndividualService extends Component{
	constructor(props){
        super(props)
        this.state={
        	selectedRowKeys:[],
        	title:"",
        	visible:false,
        	chu:[],
        	num:1
        }
    }
	 componentWillMount(){
    	console.log(this.props)
    	console.log(this.props.location)
    		
    }
	render(){
		 const { selectedRowKeys } = this.state;
		const columns=[
			{title: '姓名',dataIndex: 'name',key: 'name',},
			{title: '电话号码',dataIndex: 'phone',key: 'phone',},
			{title: '单位电话',dataIndex: 'phone1',key: 'phone1',},
			{title: '住宅电话',dataIndex: 'phone2',key: 'phone2',},
			{title: '邮箱',dataIndex: 'mail',key: 'mail',},
			{title: '单位',dataIndex: 'danwei',key: 'danwei',},
			{title:'职务',dataIndex:'zhi',key:'zhi',},
			{title:'操作',key:'cao',
			 render: (text,record,index) => (
			 	<div>
					<a style={{marginRight:10}} onClick={()=>this.xiu(text,record,index)}>修改</a>
					<a onClick={()=>this.deta(text, record, index)}>删除</a>
				</div>
			 ),}
		];
		
		const rowSelection = {
		      selectedRowKeys,
		      onChange: this.onSelectChange.bind(this),
		    };
		
		var data1=
			{name:0,phone:'122333333',phone1:'123456',phone2:'1232456',mail:'1234567891@qq.com',danwei:'单位',zhi:'职务',}
			
		
		const data2={layout:'horizontal',datepicker:"",
			inputtext:[
			{label:"姓名",required:"不为空",message:"请输入姓名",placeholder:"请输入姓名",obgkey:'name',type:"text"},
			{label:"电话号码",required:"",message:"请输入姓名",placeholder:"请输入电话号码",obgkey:'phone',type:"text"},
			{label:"单位电话",required:"",message:"请输入姓名",placeholder:"请输入单位电话",obgkey:'phone1',type:"text"},
			{label:"住宅电话",required:"",message:"请输入姓名",placeholder:"请输入住宅电话",obgkey:'phone2',type:"text"},
			{label:"邮箱",required:"",message:"请输入姓名",placeholder:"请输入邮箱",obgkey:'mail',type:"text"},
			{label:"单位",required:"",message:"请输入单位",placeholder:"请输入单位",obgkey:'danwei',type:"text"},
			{label:"职务",required:"不为空",message:"请输入职务",placeholder:"请输入职务",obgkey:'zhi',type:"text"},
			]
		}
		var chu=[]
		var data=[]
		for(var i=0 ;i<9; i++){
			
			data1.name=data1.name+i;
			
			data.push(data1)
		}
		console.log(data)
		return(
			<div>
				<div className="head">电话簿</div><hr/>
				<div className="main">
					<div className="main1">
							<Button type="primary" onClick={this.add.bind(this)}>新增</Button>
							<Button type="danger"  onClick={()=>this.delete()}style={{marginLeft:10}}>删除</Button>
							<Button className="floatR" type="primary" onClick={this.dao.bind(this)}>导出</Button>
							<div className="floatR">
								<Search
								    placeholder="姓名/电话号码/单位"
								    style={{ width: 300 }}
								    onSearch={(value)=>this.search(value)}
								    className="search"
								  />
							</div>
							
						<Table rowSelection={rowSelection} columns={columns} dataSource={data} />,
						
					</div>
					 <Modal
		                    title="表单"
		                    visible={this.state.visible}		        
		                    onCancel={this.handleCancel.bind(this)}
							footer={null}
							key={this.state.num}
		                >
		                    
		                        <Form data={data2} value={(index)=>this.getvalue(index)} chu={this.state.chu} ref='form'/>
		                </Modal>
				</div>
			</div>
		)
	}
	add(){
		console.log("点击了添加")
		this.setState({
            visible:true
        })
	}
	handleCancel(){
		this.setState({
            visible:false
        })
	}
	getvalue(index){
		console.log(index)
	}
	delete(){
		console.log("点击了删除")
	}
	dao(){
		console.log("导出")
	
	}
	search(value){
		console.log(value,"查找")
	}
	xiu(text, record, index){
		var num=Math.random()
		console.log(num,"随机key")
		console.log(text, record, index,"修改")
		this.setState({chu:record, visible:true,num:num});
		
		
	}
	deta(text, record, index){
		console.log(text, record, index,"删除")
	}
	onSelectChange(selectedRowKeys){
			console.log('selectedRowKeys changed: ', selectedRowKeys);
   				 this.setState({ selectedRowKeys });
		}
		
	
}
export default IndividualService