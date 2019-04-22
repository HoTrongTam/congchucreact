const reselectRecommend = state => key => state.get('rcReducer').toJS()[key];

export const selectors = {
   getDataRc: (state) => reselectRecommend(state)('data'),
   getLoading: (state) => reselectRecommend(state)('loading')
}
