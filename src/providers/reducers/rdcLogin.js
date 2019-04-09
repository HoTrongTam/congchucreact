import * as types from '../actions/types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: false,
    data: Immutable.Map({}),
    dataString: null,
    error: '' 
});

export const rdcLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LOGIN:
            return state.merge({ loading: true, dataString: null, error: ''} );
        case types.GET_LOGIN_SUCCESS: {
            return state.merge({ loading: false, dataString: action.payload.data});
        }
        case types.GET_LOGIN_ERROR:
            return state.merge({ loading: false, error: action.payload.data.description});
        default:
            return state;
    }
}