import { UserFormValues } from '../components/User/User';

export interface SignupReducer {
    type: string;
    payload: UserFormValues;
}

export interface RootState {
    signup: UserFormValues;
}