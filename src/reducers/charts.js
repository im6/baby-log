import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const charts = handleActions({
        ['charts/getAll'](state, action) {
            return {
                chartsList:[],
                isLoading: true
            };
          },
        ['charts/getAll/success'](state, action) {
            return {
                chartsList:action.payload,
                isLoading: false
            };
        }
},
    {
        chartsList: [],
        isLoading: true
    });

export default charts;
