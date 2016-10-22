import  './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'


import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { connect, Provider } from 'react-redux'


import store  from './store'


import Tool  from './panel/tool'
import View  from './panel/view'
import Property from './panel/property'

 
@DragDropContext(HTML5Backend)
export default class App extends React.Component  {
  render() {
    return (<div>
    	<Tool />
    	<View />
    	<Property />
    </div>);
  }
}
 

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('app'));



