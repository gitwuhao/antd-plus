import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'


import methods,{each,isFunction,getGuid} from 'scripts/3rd/methods/index'

import TabsPanel from './TabsPanel'
 
export default class Property extends React.Component {
  
  render() {
    return (<aside className="property"><TabsPanel /></aside>);
  }
 
}