import  './index.scss'

import React from 'react'
import ReactDOM from 'react-dom'


import { connect, Provider } from 'react-redux'


import store  from './store'


import Tool  from './panel/tool'
import View  from './panel/view'
import Property from './panel/property'

 
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



