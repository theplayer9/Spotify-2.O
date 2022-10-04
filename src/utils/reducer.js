import React from 'react'
import { reducerCases } from './Constants';

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token: action.token,
            }
        }
        default: return state;
    }
}

export default reducer;

export const initialState = {
    token: null,
}