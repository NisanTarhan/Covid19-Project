import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CardContainer, SearchBar, Dropdown } from '../components';
import { GlobalContext } from '../context/GlobalState';
import { secondary } from '../res/colors';

const HomeLayout = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.secondary.bg}; 
`

const InputItemContainer = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 1.5rem;
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
        <HomeLayout secondary={secondary}>
            <InputItemContainer>
                <SearchBar handleSearchInput={handleSearchInput} />
                <Dropdown />
            </InputItemContainer>
            <CardContainer filteredCountries={filteredCountries} loading={loading} />
        </HomeLayout>
    );
}

export default Home;