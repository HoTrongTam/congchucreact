
import * as types from '../actions/types';

export const loginService = (data) => ({
    type: types.GET_LOGIN,
    payload: {data}
})