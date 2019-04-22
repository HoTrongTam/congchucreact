import * as types from './types';

export const rcAction = (obj) => ({
  type: types.GET_RECOMMEND,
  payload: { obj }
})
