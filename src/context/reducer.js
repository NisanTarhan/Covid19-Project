export default (state, action) => {
    switch (action.type) {
        case "ASSENDING_DEATHS":
            return {
                ...state,
                countriesData: state.countriesData.sort((a, b) => a["deaths"] - b["deaths"])
            }

        case "DESCENDING_DEATHS":
            return {
                ...state,
                countriesData: state.countriesData.sort((a, b) => b["deaths"] - a["deaths"])
            }

        default:
            return state;
    }
} 