import * as types from '../actions/types';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: false,
    data: [],
});

const rcReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_RECOMMEND:
            return state.merge({ loading: true });
        case types.GET_RECOMMEND_SUCCESS: {
            return state.merge({ loading: false, data: [...state.toJS().data, ...action.payload] });
        }
        case types.GET_RECOMMEND_ERROR:
            return state.merge({ loading: false });
        default:
            return state;
    }
}

export default rcReducer;
