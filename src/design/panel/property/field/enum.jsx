import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

import {Select,Form} from 'antd'

const FormItem = Form.Item;

import methods,{each,isFunction,getGuid} from 'methods'

const Option = Select.Option;
 
export default class EnumField extends React.Component  {
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
    let {fieldValue,layout,label,data,...props}=this.props;
  	let children=[];
    (data||[]).map((v)=>{
	   children.push(<Option value={v} key={getGuid()}>{v}</Option>);
	  });
    return (<FormItem {...layout} label={label}><Select defaultValue={fieldValue} {...props} onChange={this.onChange}>{children}</Select></FormItem>);
  }

}

 EnumField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  fieldValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.number
  ]),
  tags: PropTypes.bool,
  multiple: PropTypes.bool,
  data: PropTypes.array
};