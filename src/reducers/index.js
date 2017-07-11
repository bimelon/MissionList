import missionsReducer from './missions'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
  missionsReducer,
})

export default allReducer;
