import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';

const reducers = combineReducers({
  auth,
  home
});

export default reducers;
