import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const initialState = {
    countriesData: [],
    loading: false,
    error: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://covid19.mathdro.id/api/deaths')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: "FETCH_ERROR",
                })
            })
    }, [])

    //ACTIONS
    function assendingForDeaths() {
        dispatch({
            type: "ASCENDING_DEATHS"
        })
    };

    function descendingForDeaths() {
        dispatch({
            type: "DESCENDING_DEATHS"
        })
    };

    return (
        <GlobalContext.Provider value={{
            countriesData: state.countriesData,
            loading: state.loading,
            assendingForDeaths,
            descendingForDeaths
        }}>
            {children}
        </GlobalContext.Provider>
    )

}