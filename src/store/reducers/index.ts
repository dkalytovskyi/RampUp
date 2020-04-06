import signupReducer from './signup';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    users: signupReducer
});

export default allReducers;