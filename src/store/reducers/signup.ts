import { produce } from 'immer';

import { SignupReducer } from '../types';
import { UserFormValues } from '../../components/User/User';

const signupReducer = (users: Array<UserFormValues> = [], action: SignupReducer) => {
    switch (action.type) {
        case 'SIGNUP_ASYNC':
            return produce(users, (draftState) => {
                draftState.push(action.payload);
            });
        default:
            return users;
    }
}

export default signupReducer;