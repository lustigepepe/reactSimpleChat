import { combineReducers } from 'redux';
import {FontReducer} from './FontReducer';
import {ChatReducer} from './ChatReducer';

export default combineReducers({
    FontReducer,
    ChatReducer
})