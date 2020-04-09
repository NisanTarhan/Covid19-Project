import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { font } from '../res/fonts';

const SearcInput = styled.input`
    height: 3rem;
    width: 13rem;
    box-shadow: 10px 10px 13px -2px rgba(0,0,0,0.29);
    border: 1px solid gray;
    border-radius: 10px;
    padding: 0.6rem;
    align-self: center; 
    font-size: 1rem;
    font-family: ${props => props.font.primary};
`

const SearchBar = ({ handleSearchInput }) => {
    SearchBar.propTypes = {
        handleSearchInput: func.isRequired,
    }
    return (
        <SearcInput
            type="search"
            placeholder="Search Country"
            onChange={handleSearchInput}
            font={font}
        />
    )
}

export default SearchBar;