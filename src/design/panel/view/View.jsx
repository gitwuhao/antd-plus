

import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'


import {  bindActionCreators } from 'redux'

import { connect } from 'react-redux'

import methods,{getGuid,each,isEmptyValue} from 'methods'


import  {initSourceContainer as initSourceDragDropContainer,initTargetContainer as initTargetDragDropContainer}  from '../dragdrop'

import  {view as viewAction}  from './action'

import * as util from 'src/design/util'


import Item from './Item'

import debug from 'src/3rd/debug'

const log=debug('View');

const defaultAccepts=['-'];

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  let structureMap = state.tool.map;
  return {
    active:state.view.active,
    data: state.view.data,
    structure: structureMap
  };
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, viewAction), dispatch);
}

@connect(mapStateToProps,mapDispatchToProps)
export default class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGuid:null
    };
    this.structureMap = props.structure;
    this.path='';
    this.lastDropTimeStamp=0;
    this.lastSelectedComponent;
    [
      'dragulaDecorator'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });

  }

  onSelectComponent(event,component){
    if(component.props.data){
      this.props.onSelect(component.props.data);
    }
  }

  onDropComponentPath(event,component){
    if(this.lastDropTimeStamp<event.timeStamp){
      log('onDropComponentPath', component);
      this.path = component.props.path;
    }
    this.lastDropTimeStamp=event.timeStamp;
  }

  onDropComponent(type) {
    let direction= viewAction.DIRECTION.default;
    let data={
      type: type,
      path: this.path,
      direction: direction
    };
    
    this.props.onInsert(data);

    log('onDropComponent', type);
  }

  loop(data,parentPath){
    let children=[];
    let props={
      root : this
    };
    let active=this.props.active;
    (data||[]).map((item,index)=>{
      let type=item.type;
      props.type=type;
      props.accepts=this.structureMap[type]||defaultAccepts;
      
      let path=[];
      if(parentPath){
        path.push(parentPath);
      }
      path.push(index);
      props.data=item;
      props.path=path.join('-');
      util.setViewItemDataPath(props.path,item);
      props.selected=util.getItemId(active)===util.getItemId(item);
      children.push(<Item key={getGuid()} {...props}>{this.loop(item.children,props.path)}</Item>);
    });
    return children;
  }
  
  componentDidMount(){
    log('componentDidMount');
  }


  render() {
    let {data}=this.props;
    log('render view');
    let props={
      root : this,
      type : 'root',
      accepts : this.structureMap['root'],
      path : ''
    };
    util.initViewDataPathMap();
    return (
      <section className="view" onClick={this.onClick}  ref={this.dragulaDecorator}>
        <Item {...props}>
        {this.loop(data)}
        </Item>
      </section>
    );
  }

  dragulaDecorator(element){
    initTargetDragDropContainer({
        componentInstance:this,
        element:element,
        store:null
    });
  }

}

