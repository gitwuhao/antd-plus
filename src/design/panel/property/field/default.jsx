import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'
 
import {Form} from 'antd'
const FormItem = Form.Item;

export default class DefaultField extends React.Component  {

  render() {
  	let children;
    let {fieldValue,layout,link,label,...props}=this.props;
  	if(link){
  		children=(<a href={link} target="_blank">{fieldValue||'#'}</a>);
  	}else{
  		children=fieldValue;
  	}
    return (<FormItem {...layout} label={label} ><p>{children}</p></FormItem>);
  }

}

DefaultField.propTypes = {
  fieldValue: PropTypes.string,
  link:PropTypes.string
};