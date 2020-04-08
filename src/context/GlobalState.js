import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const filterDataFromApi = (data) => {
    return data.reduce((acc, curr, id) => {
        if (curr.deaths >= 200) {
            let newObject = {
                id: id,
                countryRegion: curr.countryRegion,
                confirmed: curr.confirmed,
                recovered: curr.recovered,
                deaths: curr.deaths,
                iso2: curr.iso2
            }
            acc.push(newObject)
        }
        return acc;
    }, [])
}

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
            .then(data => {
                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: filterDataFromApi(data)
                })
            })
            .catch(error => {
                dispatch({
                    type: "FETCH_ERROR",
                    payload: error
                })
            })
    }, [])

    //ACTIONS
    function assendingForDeaths() {
        dispatch({
            type: "ASCENDING_DEATHS",
            payload: { ...state }
        })
    };

    function descendingForDeaths() {
        dispatch({
            type: "DESCENDING_DEATHS",
            payload: { ...state }
        })
    };

    return (
        <GlobalContext.Provider value={{
            countriesData: state.countriesData,
            loading: state.loading,
            assendingForDeaths,
            descendingForDeaths,
            getDetailOfCountry: loadFunctionWithData(state.countriesData)
        }}>
            {children}
        </GlobalContext.Provider>
    )

}