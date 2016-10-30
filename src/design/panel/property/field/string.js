import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'
 
import {Input,Form} from 'antd'

const FormItem = Form.Item;

export default class StringField extends React.Component  {
 constructor(props) {
    super(props);
 
    [
      'onChange',
      'onBlur'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });

  }

  onChange(e){
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
    return (<FormItem {...layout} label={label}><Input type="text" defaultValue={fieldValue}  onBlur={this.onBlur} onChange={this.onChange}/></FormItem>);
  }

}

StringField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.string
};