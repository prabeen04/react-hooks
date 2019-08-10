import React, {useEffect, useReducer } from 'react';
const initialState = {

}
function useNews() {
    const [state, dispatch] = useReducer(newsReducer, initialState)
    return {
        state,
        dispatch,
    }
}

function newsReducer(state, action) {

}