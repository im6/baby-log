import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const auth = handleActions({
        ['auth/login'](state, action) {
            return {
                isAuthenticated: true,
                token: action.payload.token,
                userName: action.payload.username,
                access: []
            };
          },
        ['auth/logoff'](state, action) {
            return {
                isAuthenticated: false,
                token: null,
                userName: null,
                access: []
            };
        }
},
    {
        isAuthenticated: false,
        token: null,
        userName: null,
        access: []
    });

export default auth;
