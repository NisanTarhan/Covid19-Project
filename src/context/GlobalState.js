import React, { createContext, useReducer, useEffect } from 'react';
import { assendingForDeaths, descendingForDeaths, fetchAndFilterData, errorDuringFetch } from './actions'
import reducer from './reducer';

const loadFunctionWithData = (countriesData) => {
    function getDetailOfCountry(id) {
        return countriesData.filter(country => country.id == id)[0];
    }
    return getDetailOfCountry;
}

const initialState = {
    countriesData: [],
    loading: false,
    error: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //GETTING DATA FROM API
    useEffect(() => {
        fetch('https://covid19.mathdro.id/api/deaths')
            .then(response => response.json())
            .then(data => dispatch(fetchAndFilterData(data)))
            .catch(error => dispatch(errorDuringFetch(error)))
    }, [])

    return (
        <GlobalContext.Provider value={{
            countriesData: state.countriesData,
            loading: state.loading,
            assendingForDeaths: () => dispatch(assendingForDeaths(state)),
            descendingForDeaths: () => dispatch(descendingForDeaths(state)),
            getDetailOfCountry: loadFunctionWithData(state.countriesData)
        }}>
            {children}
        </GlobalContext.Provider>
    )

}