import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux'
import thunkMiddleware from 'redux-thunk'
 
 
import * as reducers from './reducers'

import * as types from 'scripts/design/constants/ActionTypes'


let initialState={
	tool : window.getStructConfig(),
	view: {
		data : window.getInitialState()
	}
};

const store = createStore(combineReducers(reducers),initialState,applyMiddleware(thunkMiddleware));

store.dispatch({
	type: types.INIT_STORE
});
export default store;