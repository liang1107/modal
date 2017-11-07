import React,{Component} from 'react'
import { Form, Icon, Input, Button ,Select, InputNumber, Switch, Radio,
  Slider,DatePicker} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;





class Form1  extends Component{
    constructor(props){
        super(props)
        this.state={
        	value:'1'
        }
    }
		componentDidMount(){
			console.log("componentDidMount初始化")
			var chu=this.props.chu
			this.props.form.setFieldsValue(chu);

			
		}
    render(){
    const chu={username:"初始化"}
		const { getFieldDecorator} = this.props.form;
		const formItemLayout = {
		      labelCol: { span: 6},
		      wrapperCol: { span: 14},
		    };
//		    console.log(this.props.data)
		    var data=this.props.data
		    //建立inputtext，DOM节点
		    if(data.inputtext){
		    	var zhi=data.inputtext
//		    	console.log(zhi)
		    	var arr=[]
		    	for(var i in zhi){
		    		
		    		if(zhi[i].type=="number"){//数字输入框
		    			var arr1=(
		    				<InputNumber  key={i} min={zhi[i].min} max={zhi[i].max} />
		    			)
		    		}else if(zhi[i].type=="switch"){//switch按钮
		    			var arr1=(
		    				<Switch defaultChecked={true}/>
		    			)
		    		}else if(zhi[i].type=="textarea"){//textarea
		    			var arr1=(
		    				<TextArea rows={zhi[i].rows}  cols={zhi[i].cols}/>
		    			)
		    		}else if(zhi[i].type=="Select"){
		    			var opt=[]
			    		for (let j in zhi[i].Option){
			    			
			    			opt.push(
			    				<Option key={j} value={zhi[i].Option[j].value}>{zhi[i].Option[j].text}</Option>
			    			)
			    		}
		    			var arr1=(
		    				<Select mode={zhi[i].mode} placeholder={zhi[i].placeholder}>
			              {opt}
			           </Select>
		    			)
		    		}else if(zhi[i].type=="Radio"){
		    			var opt1=[]
			    		for (let j in zhi[i].Option){
			    			
			    			opt1.push(
			    				<Radio key={j} value={zhi[i].Option[j].value}>{zhi[i].Option[j].text}</Radio>
			    				
			    			)
			    		}
		    			var arr1=(
		    				<RadioGroup >
			              {opt1}
			          </RadioGroup>
		    			)
		    		}
		    		else{//文本输入
		    			var arr1=(
		    				<Input  type={zhi[i].type} placeholder={zhi[i].placeholder} key={i} />
		    			)
		    		}
		    		
		    		arr.push(
		    			<FormItem
				        {...formItemLayout}
				        label={zhi[i].title}
				        key={i}
				        hasFeedback 
			        >
			          {getFieldDecorator(`${zhi[i].dataIndex}`
											
			          	,(zhi[i].type=="switch")?{ valuePropName: 'checked' }:{
			            rules: [{ required: `${zhi[i].required}`, message: `${zhi[i].message}` }],
			          })(
			          	(zhi[i].type=="switch")?(<Switch />):
			            arr1
			          )}
			        </FormItem>
		    		)
		    	}		    	
		    }
		     if(data.datepicker){
		     	var time=[
		     		<FormItem
			          {...formItemLayout}
			          label="选择时间"
			          key='1'
			        >
			          {getFieldDecorator('date-picker', {
				      rules: [{ type: 'object', required: false, message: 'Please select time!' }],
				    })(
			            <DatePicker />
			          )}
			        </FormItem>
		     	]
		     }
		   
        return(
        	
            <div>
            	<Form layout={data.layout} onSubmit={this.handleSubmit.bind(this)} >
			        
			        {arr}
			        
			       
			        
           			
			      	{time}
			        
			        
			        
			        
			        <FormItem
				        {...formItemLayout}
				        label="登录:"
			        >
			          <Button type="primary" htmlType="submit" className="login-form-button">
			            登录
			          </Button>
			        </FormItem>
			      </Form>
            
            </div>
        )
    }
    
    handleSubmit(e) {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	        this.props.value(values)
	        
	        
	      }
	    });
	  }

}
const WrappedHorizontalLoginForm = Form.create()(Form1);
export default WrappedHorizontalLoginForm