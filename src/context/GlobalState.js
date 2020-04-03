import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
    countriesData: [
        {
            "countryRegion": "Spain",
            "confirmed": 117710,
            "recovered": 30513,
            "deaths": 10935,
            "active": 76262,
            "iso2": "ES",
            "iso3": "ESP"
        },
        {
            "countryRegion": "Italy",
            "confirmed": 115242,
            "recovered": 18278,
            "deaths": 13915,
            "active": 83049,
            "iso2": "IT",
            "iso3": "ITA"
        },
        {
            "countryRegion": "Germany",
            "confirmed": 85903,
            "recovered": 22440,
            "deaths": 1122,
            "active": 62341,
            "iso2": "DE",
            "iso3": "DEU"
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{
            countriesData: state.countriesData
        }}>
            {children}
        </GlobalContext.Provider>
    )

}