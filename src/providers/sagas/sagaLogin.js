import { takeLatest, put, call } from 'redux-saga/effects';
import { apiLogin } from '../constants/CallApi';
import * as types from '../actions/types';
import { goHome } from '../../screens/navigation';
//DDeer mai tinh
function* sagaLogin({ payload }) {
    try {
        const reponse = yield call(apiLogin, payload.data);
        const { status, data } = reponse;
        console.log(reponse);
        if (status === 200) {
            if (data.status === "SUCCESS") {
                if (data.resultObject == "") {
                    yield put({ type: types.GET_LOGIN_ERROR, payload: { data } });
                } else {
                    yield put({ type: types.GET_LOGIN_SUCCESS, payload: { data: data.resultObject } });
                }
            } else {
                yield put({ type: types.GET_LOGIN_ERROR, payload: { data: data.description } });
            }

        } else {
            yield put({ type: types.GET_LOGIN_ERROR });
        }

    } catch (error) {
        console.log(error);
        yield put({ type: types.GET_LOGIN_ERROR });
    }
}
export default function* watchFuncLogin() {
    yield takeLatest(types.GET_LOGIN, sagaLogin)
}