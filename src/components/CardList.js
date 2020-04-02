import React from 'react';
import styled from 'styled-components';
import CountryCard from './CountryCard';

const CardListLayout = styled.div`
    width: 88vw;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(10rem, 1fr));
    grid-gap: 1.2rem;
`

const CardList = () => {
    return (
        <CardListLayout>
            <CountryCard />

        </CardListLayout>
    )
}

export default CardList;