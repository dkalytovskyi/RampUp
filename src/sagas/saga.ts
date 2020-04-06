import { takeEvery, put, delay } from 'redux-saga/effects';

import { SignupReducer } from '../store/types';

function* signUpAsync(action: SignupReducer) {
    yield delay(3000);
    yield put({type: 'SIGNUP_ASYNC', payload: action.payload});
}

export function* watchSignUp() {
    yield takeEvery('SIGNUP_SUCCESS', signUpAsync);
}