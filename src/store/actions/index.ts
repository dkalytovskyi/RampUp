import { UserFormValues } from '../../components/User/User';

export const signup = (user: UserFormValues) => {
    return {
        type: 'SIGNUP_SUCCESS',
        payload: user
    }
}