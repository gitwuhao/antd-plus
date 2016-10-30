import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

import { Form, Input, Select,Switch, Checkbox, Radio, Tooltip, Icon} from 'antd'

import methods,{each,isEmpty,isFunction,getGuid} from 'methods'

import fileds from './field/index'



const getField  = (field) => {
	let {type,value,...props} = field;
  if(!isEmpty(field.fieldValue) ){
    value= field.fieldValue;
  }

	let FiledItem;
	if(type){
	  FiledItem=fileds[type];
	}else{
	  FiledItem=fileds.string;
	}

	FiledItem= FiledItem || fileds.default;

  if(type==='boolean'){
    props.fieldValue=value && value!=false ? true : false;
  }else if(type==='json' && value){
		props.fieldValue=JSON.stringify(value);
  }else{
    props.fieldValue=value;
  }
	return (<FiledItem {...props} key={getGuid()}></FiledItem>);
};


export default class FormPanel extends React.Component  {
  static propTypes = {
    data: PropTypes.array,
    layout: PropTypes.object,
    type: PropTypes.string
  }
  
 

  render() {
  	let {panel,layout,type,propertyFields,propertyValues}=this.props;
  	let children=[];
  	(propertyFields||[]).map((field)=>{
  	  let {tip,link,label}=field;
      field.fieldName=label;
      field.fieldValue=propertyValues[label];
      field.panel=panel;
  	  if(tip){
  	    label=(<span>{label}<Tooltip title={tip}><Icon type="question-circle-o" /></Tooltip></span>);
  	  }else if(link){
    	 label=(<a href={link} target="_blank">{label}</a>);
  	  }
      field.layout=layout;
      field.label=label;
	    children.push(getField(field));
	   });

    return (<Form horizontal>{children}</Form>);
  }
}



 