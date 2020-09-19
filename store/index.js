import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

// import { createStore, applyMiddleware, combineReducers } from './redux'
// import logger from './redux-logger'
// import thunk from './redux-thunk'

let store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store

