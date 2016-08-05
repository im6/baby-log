import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const charts = handleActions({
  ['charts/getAll'](state) {
      debugger;

    return {
        chartsList:[
            {name: 'chart1', data: [1,2,3,4,5]},
            {name: 'chart2', data: [1,2,3,4,6]}
        ]
    };
  }
},
    {
        chartsList: []
    });

export default charts;
