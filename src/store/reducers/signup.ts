import { SignupReducer } from '../types';

const signupReducer = (state={}, action: SignupReducer) => {
    switch (action.type) {
        case 'SIGNUP_ASYNC':
            return action.payload;
        default:
            return state;
    }
}

export default signupReducer;