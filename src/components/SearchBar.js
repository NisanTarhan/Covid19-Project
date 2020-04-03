import React, { useState } from 'react';
import styled from 'styled-components';

const SearcInput = styled.input`
    height: 2rem;
    width: 13rem;
    border: none;
    padding: 0.6rem;
    align-self:center; 
`

const SearchBar = () => {
    const [text, setText] = useState("");

    const handleSearchInput = e => setText(e.target.value);

    return (
        <SearcInput
            type="search"
            placeholder="Search Countries"
            value={text}
            onChange={handleSearchInput}
        />
    )
}

export default SearchBar;