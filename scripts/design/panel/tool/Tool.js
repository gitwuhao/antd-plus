import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'

import {  bindActionCreators } from 'redux'
import { connect } from 'react-redux'



import { Collapse,Icon,Tooltip } from 'antd'


import methods,{each,isFunction,getGuid} from 'scripts/3rd/methods/index'

import  {initSourceContainer as initSourceDragDropContainer,initTargetContainer as initTargetDragDropContainer}  from '../dragdrop'


import IconItem from './IconItem'

import debug from 'scripts/3rd/debug'

const log=debug('Tools');

const Panel = Collapse.Panel;

function mapStateToProps(state) {
  return {
    data : state.tool.data 
  };
}

@connect(mapStateToProps)
export default class Tool extends React.Component  {
 
  static propTypes = {
    data: PropTypes.array
  }

  constructor(props) {
    super(props);
 
    [
      'dragulaDecorator'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });

  }

  getPanel (item) {
    let {label,key}=item;
    let children=[];
    (item.children||[]).map((iconItem)=>{
      children.push(<IconItem key={getGuid()} {...iconItem} />);
    });
    return (<Panel header={label} key={key} ><ul className="anticons-list" >{children}</ul></Panel>);
  }
 
  

  render() {
  	let {data}=this.props;
  	let children=[];
    let firstKey;
  	(data||[]).map((item)=>{
      let key=item.key||getGuid();
      if(!firstKey){
        firstKey=key;
      }
      item.key=key;
      children.push(this.getPanel(item));
	  });
    return (<aside className="tool" ref={this.dragulaDecorator}><Collapse defaultActiveKey={[firstKey]} accordion={true}>{children}</Collapse></aside>);
  }

  dragulaDecorator(element){
    initSourceDragDropContainer({
        componentInstance:this,
        element:element,
        store:null
    });

  }

}
  
 