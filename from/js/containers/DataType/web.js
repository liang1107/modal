import React,{Component} from "react";
import { Modal, Button ,Input,Table ,Tree,Popconfirm,Spin } from 'antd';
import {connect} from 'react-redux';
import TreeModal from './treendatamm'
import "./web.css";
//import { fetchDataTable,fetchDataTree } from "../../actions/DataTypeAction";
//import DataTypeFrom from '../IndividualService/from'
const Search = Input.Search;
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
			
		}
	render(){
		that=this
//		const {datatype}=this.props
//		console.log(datatype.dataTable,"dataTable")
		const { selectedRowKeys } = this.state;
		let { sortedInfo, filteredInfo } = this.state;
		sortedInfo = sortedInfo || {};
		const columns=[
			{title: '资料类型名称',dataIndex: 'name',key: 'name',type:'text'},
			{title: '上传资料类型',dataIndex: 'data',key: 'data',type:'text'},
			{title: '最近操作时间',dataIndex: 'time',key: 'time',
			sorter: (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
			
		},
			{title:'操作',key:'cao',
			 render: (text,record,index) => (
			 	<div>
					<a onClick={()=>this.xiu(text,record,index)}>修改</a>
					<span className="ant-divider"/>
					<Popconfirm title="确定删除吗?" onConfirm={()=>this.deta(text, record, index)}>
						<a >删除</a>
					</Popconfirm>
				</div>
			 ),}
		];
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
				<div className="head">资料类型
					<div className="floatR">
						<Search
							placeholder="资料类型名称"
							style={{ width: 200 }}
							onSearch={(value)=>this.search(value)}
							className="search"
						/>
					</div>
				</div>
				<div className='contentn'>
					<div className="zuo">
						<div className='zuoheader'>资料类型菜单</div>
							<TreeModal key='1' zhan={this.state.zhan} type='DataList'  select={(selectedKeys, e)=>this.selectclick(selectedKeys, e)} />
					</div>
					<div className="main20">
						<div className='zuoheader'>资料类型列表</div>
						<div className="main1">
								<Button type="primary" style={{marginLeft:10}} onClick={this.add.bind(this)}>新增</Button>
								<Button type="danger" disabled={!this.state.selectedRowKeys.length}  onClick={()=>this.delete()}style={{marginLeft:10}}>删除</Button>	
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
		const {dispatch}=this.props;
		dispatch(fetchDataTable('token','url'+selectedKeys[0]))
		
	}	
	
}
function mapStateToProps(state) {
    const {} = state;
    return {
			
    }
}
export default connect(mapStateToProps)(Web);