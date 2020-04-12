export function assendingForDeaths(state) {
    return {
        type: "ASCENDING_DEATHS",
        payload: { ...state }
    }
};

export function descendingForDeaths(state) {
    return {
        type: "DESCENDING_DEATHS",
        payload: { ...state }
    }

};


export function fetchAndFilterData(data) {
    const filterDataFromApi = (data) => {
        return data.reduce((acc, curr, id) => {
            if (curr.deaths >= 200) {
                let newObject = {
                    id: id,
                    countryRegion: curr.countryRegion,
                    confirmed: curr.confirmed,
                    recovered: curr.recovered,
                    deaths: curr.deaths,
                    iso2: curr.iso2,
                    deathRate: (curr.deaths * 100 / curr.confirmed).toFixed(2)
                }
                acc.push(newObject)
            }
            return acc;
        }, [])
    }
    return {
        type: "FETCH_SUCCESS",
        payload: filterDataFromApi(data)
    }

}

export function errorDuringFetch(error) {
    return {
        type: "FETCH_ERROR",
        payload: error
    }

}