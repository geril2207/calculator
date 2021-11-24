import { combineReducers } from 'redux'
import calcReducer from './calc'

const rootReducer = combineReducers({ calc: calcReducer })

export default rootReducer
