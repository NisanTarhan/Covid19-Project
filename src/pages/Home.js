import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CardContainer, SearchBar, Dropdown } from '../components';
import { GlobalContext } from '../context/GlobalState';

const HomeLayout = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #f8b500, #fceabb); 
`

const Home = () => {
    const [searchInput, setSearchInput] = useState("");
    const { countriesData, loading } = useContext(GlobalContext);

    const handleSearchInput = e => {
        setSearchInput(e.target.value);
    }

    let filteredCountries = countriesData.filter(({ countryRegion }) => {
        if (searchInput.length > 2) {
            return countryRegion.toLowerCase().includes(searchInput.toLowerCase())
        }
        return true;
    })

    return (
        <HomeLayout>
            <div style={styles.inputItemsContainer}>
                <SearchBar handleSearchInput={handleSearchInput} />
                <Dropdown />
            </div>
            <CardContainer filteredCountries={filteredCountries} loading={loading} />
        </HomeLayout>
    );
}

const styles = {
    inputItemsContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1.5rem"
    }
}

export default Home;