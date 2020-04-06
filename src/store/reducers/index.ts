import signupReducer from './signup';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    signup: signupReducer
});

export default allReducers;