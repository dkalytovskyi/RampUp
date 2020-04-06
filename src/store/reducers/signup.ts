import { SignupReducer } from '../types';

const signupReducer = (state={}, action: SignupReducer) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default signupReducer;