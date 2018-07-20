/**
 * Created by jiangzz on 2017/11/8.
 * 筛选表单
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Form, DatePicker, TimePicker, Button ,Input,Row,Col,Select} from 'antd';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const Search = Input.Search;
const Option = Select.Option;
import moment from 'moment';

class ScreenForm extends React.Component {
    handleSubmit(e){
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (err) {
                return;
            }
            console.log(values,"1123")
            if(values.StartDate){
                values.StartDate=values.StartDate.format('YYYY-MM-DD');  
            }
            if(values.EndDate){
                values.EndDate=values.EndDate.format('YYYY-MM-DD');
            }
            console.log('Received values of form: ', values);
            this.props.search(values)
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5},
            wrapperCol: { span: 15 },
        };
        const data=this.props.data.data
        console.log(data,"search")
        var arr=[]
        for (let a in data){
            if(data[a].type=='input'){
                if(data[a].num){
                    for(let b in data[a].num){
                        arr.push(
                            <Col span={5} style={{float:'right',paddingTop:5}}>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator(`sousuo${b}`)(
                                    <Input placeholder={data[a].num[b].placeholder} style={{width:'200px'}} size="default"/>
                                )}
                            </FormItem>
                        </Col>
                             ) 
                    }
                }else{
                    arr.push(
                        <Col span={5} style={{float:'right',paddingTop:5}}>
                        <FormItem {...formItemLayout}>
                            {getFieldDecorator('sousuo')(
                                <Input placeholder={data[a].placeholder} style={{width:'100px'}} size="default"/>
                            )}
                        </FormItem>
                    </Col>
                         )
                }
               
            }
            if(data[a].type=='select'){
                if(data[a].num){
                    for(let b in data[a].num){
                        var option=[]
                        for(let d in data[a].num[b]){
                            option.push(
                                <Option value={'a'+b+d}>{data[a].num[b][d]}</Option>
                            )
                        }
                        arr.push(
                            <Col md={4} style={{float:'right',paddingTop:5}}>
                            <FormItem
                                {...formItemLayout}
                                >
                                {getFieldDecorator(`select${b}`)(
                                    <Select mode="multiple" placeholder="请确认选择字段">
                                        {option}
                                    </Select>
                                )}
                            </FormItem>
                            </Col>
                             )
                    }
                }else{
                    var option=[]
                    for(let c in data[a].data){
                        option.push(
                            <Option value={c}>{data[a].data[c]}</Option>
                        )
                    }
                    arr.push(
                        <Col md={4} style={{float:'right',paddingTop:5}}>
                        <FormItem
                            {...formItemLayout}
                            >
                            {getFieldDecorator('select')(
                                <Select mode="multiple" placeholder="请确认选择字段">
                                    {option}
                                </Select>
                            )}
                        </FormItem>
                        </Col>
                         )
                }
            }
            if(data[a].type=='time'){
                arr.push(
                    <Col md={8} style={{float:'right',paddingTop:5}}>
                    <FormItem
                        label="起止时间"
                        {...formItemLayout}
                    >
                        <Col span={11}>
                            <FormItem >
                                {getFieldDecorator('StartDate', {
                                })(
                                    <DatePicker placeholder="开始时间" size="default"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={2}>
                            <p className="ant-form-split">-</p>
                        </Col>
                        <Col span={11}>
                            <FormItem>
                                {getFieldDecorator('EndDate', {
                                })(
                                    <DatePicker placeholder="结束时间" size="default" />
                                )}
                            </FormItem>
                        </Col>
                    </FormItem>
                </Col>
                )
            }
        }
        return (
            <div className='searchfrom'>
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Row>
                    
                    <Col span={2} style={{float:'right'}}>
                        
                        <Button type="primary" htmlType="submit">搜索</Button>
                        
                    </Col>
                    {arr}
                </Row>
            </Form>
            </div>
        );
    }
    /*handleFormReset(){
        const { form } = this.props;
        form.resetFields();
    }*/
}

function mapStateToProps(state){
    const {}=state;
    return{
        
    }
}
const ScreenFormForm = Form.create()(ScreenForm);
export default connect(mapStateToProps)(ScreenFormForm);