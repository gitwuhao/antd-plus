import './index.scss'
import React,{PropTypes} from 'react'
import ReactDOM,{ findDOMNode } from 'react-dom'

import { Collapse,Icon,Tooltip } from 'antd'

import methods,{each,isFunction,getGuid} from 'methods'


import * as util from 'src/design/util'

import IconItem from '../tool/IconItem'

import dom from 'src/3rd/methods/dom'

import debug from 'src/3rd/debug'
const log=debug('ViewItem');

let guid=getGuid();
 
export default class Item extends React.Component  {

  static propTypes = {
    root:PropTypes.object.isRequired,
    path:PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      hasDropped: false,
      isSelected:false,
      type: '',
      hasDroppedOnChild: false
    };

    [
      'onClick',
      'onDragEnter',
      'onDragOver',
      'onDrop'
    ].forEach((m) => {
      this[m] = this[m].bind(this);
    });

  }

 
  onClick(e){
    this.props.root.onSelectComponent(e,this);
    e.preventDefault();
    e.stopPropagation();
  }

  onDragEnter(e){

  }

  onDragOver(e){

  }

  onDrop(e){
    this.props.root.onDropComponentPath(e,this);
  }

  render() {
  	let { type,children,path,selected} = this.props;
    let className=[type];

    if(selected){
      className.push('selected');
    }


    let props={
      onClick: this.onClick,
      onDragEnter : this.onDragEnter,
      onDragOver : this.onDragOver,
      onDrop : this.onDrop,
      className : className.join(' '),
      'data-type':type,
      'data-position':path
    };
    let data=this.props.data;
    let array=[type];
    if(data && data.value){
        array.push('#'+data.value);
    }
    let text=array.join('');
    children=[<span key={getGuid()}>{text}</span>].concat(children);
    return (<ins {...props} >{children}</ins>);
  }

}
 