import React from 'react';
import styled from 'styled-components';

const SearcInput = styled.input`
    height: 2rem;
    width: 13rem;
    border: none;
    padding: 0.6rem;
    align-self: center; 
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