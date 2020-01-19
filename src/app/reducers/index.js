import { combineReducers } from 'redux';
import users from './users';
import filters from './filters';

const rootReducer = combineReducers({users, filters});

export default rootReducer;