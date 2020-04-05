import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CardList, SearchBar, Dropdown } from '../components';
import { GlobalContext } from '../context/GlobalState';

const HomeLayout = styled.div`
    width: 100vw;
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
            <CardList filteredCountries={filteredCountries} loading={loading} />
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