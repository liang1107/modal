import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Tree,Spin ,Icon  } from 'antd';
const TreeNode = Tree.TreeNode;
var that

class TreeModal extends Component{  
    constructor(props) {
        super(props)
        this.state = {
            zhan:['0']
        }
    }  
    componentWillMount(){
        
      
    }
    componentDidMount(){
        
    }
	select(selectedKeys, e){
        console.log(2222,selectedKeys, e)
        this.props.select(selectedKeys, e)	  		  		 		  
	}
	renderTreeNodes(data){
		return data.map((item) => {
		  if (item.children) {
			return ( 
			  <TreeNode title={item.title} key={item.key} dataRef={item}>
				{that.renderTreeNodes(item.children)}
              </TreeNode>
			);
		  }
		  return <TreeNode {...item} dataRef={item} />;
		});
	  }
   
    render() {

       var treeDatas=[
    {title:'全部',key:'0',children:[
        {title:"市委直属机关工作委员会",key:'0-0'},
        {title:"市委直属机关工作委员会",key:'0-1'},
        {title:"市委直属机关工作委员会",key:'0-2',children:[
            {title:'党建第一协作区',key:'0-2-0'},
            {title:'党建第二协作区',key:'0-2-1'},
            {title:'党建第三协作区',key:'0-2-2'},
        ]},
    ]}
]
        console.log(treeDatas);
        console.log(this.props.zhan,'展开的项2')
        that=this
        if(treeDatas){
            return (<div>  
                <Tree 
                expandedKeys={this.props.zhan?this.props.zhan:this.state.zhan}
                    onSelect={this.select.bind(this)}>
                    {this.renderTreeNodes(treeDatas)}
                </Tree>
            </div>);  
        }else{
            return (<Spin />)
        }
           
      
        
       
    }  
};  
function mapStateToProps(state){
    const{}=state;
    return{
        
    }
}
export default connect(mapStateToProps)(TreeModal);  
