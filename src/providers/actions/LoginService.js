
import * as types from './types';

export const loginService = (data) => ({
  type: types.GET_LOGIN,
  payload: { data }
})
