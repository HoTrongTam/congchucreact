import { all, fork } from 'redux-saga/effects';
import watchFuncLogin from './sagaLogin';
export default function* rootSaga(){
  yield all([fork(watchFuncLogin)])
}