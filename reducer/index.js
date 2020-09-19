import moneyReducer from './moneyReducer'
import countReducer from './countReducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({
    countReducer,
    moneyReducer,
})

export default rootReducer