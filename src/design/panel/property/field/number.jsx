import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'
 
import {InputNumber,Form} from 'antd'

const FormItem = Form.Item;

export default class NumberField extends React.Component  {
 	constructor(props) {
    super(props);
 
    [
      'onChange',
      'onBlur'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });
  }

  onChange(value){
  	//e.target.value
  	// let value=e.target.value;
  	this.isChange=true;
  }

  onBlur(e){
  	//e.target.value
  	let value=e.target.value;
    let {fieldName,panel}=this.props;
  	if(this.isChange){
    	panel.onChange(fieldName,value);
    }
    this.isChange=false;
  }

  render() {
    let {fieldValue,layout,label,...props}=this.props;
    return (<FormItem {...layout} label={label}><InputNumber defaultValue={fieldValue} onBlur={this.onBlur} onChange={this.onChange}/></FormItem>);
  }

}

NumberField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
};