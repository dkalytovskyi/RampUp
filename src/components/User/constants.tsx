import { UserFormValues, UserFormRules } from './User';

export const initialValues: UserFormValues = { 
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    newsletter: true
};

export const userFormRules: UserFormRules = {
    firstName: [{
        required: true, message: 'Please input your first name!'
    }],
    lastName: [{
        required: true, message: 'Please input your last name!'
    }],
    email: [{ 
        required: true, message: 'Please input your E-mail!'
    }, {
        type: 'email', message: 'Invalid E-mail!'
    }],
    password: [{
        required: true, message: 'Please input your password!'
    }],
};