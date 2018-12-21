import { combineEpics } from 'redux-observable';
import {chatEpic} from './ChatEpic';

export default  combineEpics(
    chatEpic,
  );