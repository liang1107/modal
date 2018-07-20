import React,{Component} from "react";
import { Modal, Button ,Input,Table } from 'antd';

import Form from './Form'
import "./IndividualService.css"
const Search = Input.Search;
var that=this
class Personal  extends Component{
	constructor(props){
        super(props)
        this.state={
        	
        }
    }
	 componentWillMount(){
    	console.log(this.props)
    	console.log(this.props.location)
    		
    }
	render(){
		
		return(
			<div>
				<div className="head">个人中心</div><hr/>
				<div className="main">
					<div className="main1">
							
							
					</div>
					 
				</div>
			</div>
		)
	}
	
	
	
		
	
}
export default Personal 