import { all, fork } from 'redux-saga/effects';
import watchFuncLogin from './sagaLogin';
import watchFunRc from './recommendSaga';
export default function* rootSaga(){
  yield all([
    fork(watchFuncLogin),
    fork(watchFunRc)
  ])
}
