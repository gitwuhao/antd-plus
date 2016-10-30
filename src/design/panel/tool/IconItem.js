import React,{PropTypes} from 'react'

import ReactDOM from 'react-dom'

import { Icon,Tooltip } from 'antd'

import methods,{each,isFunction,getGuid} from 'methods'


import debug from 'src/3rd/debug'

const log=debug('IconItem');

export default  class IconItem extends React.Component  {
 
  static propTypes = {
    type:PropTypes.string.isRequired,
    icon:PropTypes.string,
    label:PropTypes.string
  }


  render() {
    let {type,icon,label} = this.props;
    label=label||type.replace(/\./g,' ');
    return (<li className="handle" data-type={type}><Icon type={icon||'empty'} /><span className="anticon-label">{label||type}</span></li>);
  }
 

}
