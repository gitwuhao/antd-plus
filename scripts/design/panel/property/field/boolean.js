import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

import {Switch,Form} from 'antd'

const FormItem = Form.Item;
 
export default class BooleanField extends React.Component  {
  constructor(props) {
    super(props);
 
    [
      'onChange'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });

  }

  onChange(value){
  	let {fieldName,panel}=this.props;
  	panel.onChange(fieldName,value);
  }

  render() {
  	let {fieldValue,layout,label}=this.props;
    let props={
      defaultChecked:fieldValue,
      onChange:this.onChange
    };
    return (<FormItem {...layout} label={label} ><Switch {...props}/></FormItem>);
  }

}

BooleanField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.bool
};