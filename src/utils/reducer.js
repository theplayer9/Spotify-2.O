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
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,
                playlists: action.playlists,
            }
        }
        default: return state;
    }
}

export default reducer;

export const initialState = {
    token: null,
    playlists: [],
}