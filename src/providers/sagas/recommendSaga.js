import { takeLatest, put, call } from 'redux-saga/effects';
import { recommendApi, } from '../constants/recommendApi';
import * as types from '../actions/types';
function* sagaRecommend({ payload }) {
    const { obj } = payload;
    try {
        const reponse = yield call(recommendApi, obj);
        const { status, data } = reponse;
        if (status === 200) {
          yield put({ type: types.GET_RECOMMEND_SUCCESS, payload: data.resultObject})
        }

    } catch (error) {
        yield put({ type: types.GET_RECOMMEND_ERROR });
    }
}
export default function* watchRecommendSaga() {
    yield takeLatest(types.GET_RECOMMEND, sagaRecommend)
}
