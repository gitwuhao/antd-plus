import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

import {  bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {  Tabs } from 'antd'

import methods,{each,isFunction,getGuid} from 'scripts/3rd/methods/index'

import  {property as propertyAction}  from './action'


import * as util from 'scripts/design/util'

import debug from 'scripts/3rd/debug'
const log=debug('TabsPanel');


import FormPanel from './FormPanel'
const TabPane = Tabs.TabPane


const defaultFormItemLayout = () =>({
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
});

const maxLableFormItemLayout = () =>({
  labelCol: { span: 18 },
  wrapperCol: { span: 6 },
});

const formItemLayout={
  'event':maxLableFormItemLayout,
  'method':maxLableFormItemLayout
};

function mapStateToProps(state) {
  let propertyConfig=window.getPropertyConfig();
  let {active}=state.view;

  let propertys=propertyConfig[active.type];

  if(isFunction(propertys)){
    propertys=propertys();
  }else{
    propertys=null;
  }
  return {
    values : active,
    propertys : propertys
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, propertyAction), dispatch);
}


@connect(mapStateToProps,mapDispatchToProps)
export default class TabsPanel extends React.Component {
  
  onChange(key,value){
    log('onChange',[key,value]);
    let path=util.getViewItemDataPath(util.getItemId(this.props.values));
    this.props.onChangeProperty({
      position:path,
      property:{
        [key]:value
      }
    });
  }

  eachChildren(propertys) {
    let array=[];
    ['prop','event','method','rule'].map((type)=>{
      let fields=propertys[type];
      if(fields){
        let layout=formItemLayout[type]||defaultFormItemLayout;
        let props={
          propertyFields: fields,
          propertyValues: this.props.values,
          type:type,
          panel:this,
          layout:layout()
        };
        array.push(<TabPane tab={type} key={type}><FormPanel {...props} /></TabPane>);
      }
    });
    return array;
  }
  
  render(){
    let {propertys}=this.props;
    let children;
    if(!propertys){
      children=(<TabPane tab="prop" key="prop" ><div></div></TabPane>);
    }else{
      children= this.eachChildren(propertys);
    }
    return (<Tabs type="card">{children}</Tabs>);
  }
 
}