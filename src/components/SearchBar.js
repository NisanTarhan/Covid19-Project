import React from 'react';
import styled from 'styled-components';

const SearcInput = styled.input`
    height: 3rem;
    width: 13rem;
    border: none;
    padding: 0.6rem;
    align-self: center; 
    font-size: 1rem;
    font-family: 'Bree Serif', serif;
`

const SearchBar = ({ handleSearchInput }) => {
    return (
        <SearcInput
            type="search"
            placeholder="Search Country"
            onChange={handleSearchInput}
        />
    )
}

export default SearchBar;