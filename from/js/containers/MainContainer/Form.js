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
		    		}
		    		else{//文本输入
		    			var arr1=(
		    				<Input  type={zhi[i].type} placeholder={zhi[i].placeholder} key={i} />
		    			)
		    		}
		    		
		    		arr.push(
		    			<FormItem
				        {...formItemLayout}
				        label={zhi[i].label}
				        key={i}
				        hasFeedback 
			        >
			          {getFieldDecorator(`${zhi[i].obgkey}`
											
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
		    //建立select，DOM节点
		    if(data.Select){
		    	var sele=data.Select
		    	var SelectDom=[];
		    	
		    	for (var i in sele){
		    		var opt=[]
		    		for (var j in sele[i].Option){
		    			
		    			opt.push(
		    				<Option key={j} value={sele[i].Option[j].value}>{sele[i].Option[j].text}</Option>
		    			)
		    		}
		    		SelectDom.push(
		    			<FormItem
			          {...formItemLayout}
			          label={sele[i].label}
			          key={i}
			        >
			          {getFieldDecorator(`${sele[i].obgkey}`, {
			            rules: [
			              { required: `${sele[i].required}`, message: `${sele[i].message}` },
			            ],
			          })(
			            <Select mode={sele[i].mode} placeholder={sele[i].placeholder}>
			              {opt}
			            </Select>
			          )}
			        </FormItem>
		    			
		    		)
		    	}
		    	
		    }
		    
		    //建立radio-group，DOM
		     if(data.radio){
		    	var sele=data.radio
		    	var radioDom=[];
		    	
		    	for (var i in sele){
		    		var opt=[]
		    		for (var j in sele[i].Option){
		    			
		    			opt.push(
		    				<Radio key={j} value={sele[i].Option[j].value}>{sele[i].Option[j].text}</Radio>
		    				
		    			)
		    		}
		    		radioDom.push(
		    			<FormItem
			          {...formItemLayout}
			          label={sele[i].label}
			          key={i}
			        >
			          {getFieldDecorator(`${sele[i].obgkey}`, {
			            rules: [
			              { required: `${sele[i].required}`, message: `${sele[i].message}` },
			            ],
			          })(
			            <RadioGroup >
			              {opt}
			            </RadioGroup>
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
			        
			        {SelectDom}
			        
           			{radioDom}
           			
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