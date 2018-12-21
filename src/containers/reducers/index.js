import { combineReducers } from 'redux';
import {FontReducer} from './FontReducer';
import {ChatReducer} from './ChatReducer';
import {ChatMessage} from './../observable/reducers';

export default combineReducers({
    FontReducer,
    ChatReducer,
    ChatMessage
})