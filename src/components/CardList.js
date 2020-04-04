import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';
import CountryCard from './CountryCard';

const CardListLayout = styled.div`
    width: 88vw;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(10rem, 1fr));
    grid-gap: 1.2rem;
`

const CardList = () => {
    const { countriesData, loading } = useContext(GlobalContext);

    return (
        <CardListLayout>
            {loading ? "LOADING" : countriesData?.map((country, index) =>
                <CountryCard key={index} loading={loading} dataOfCountry={country} />)
            }
        </CardListLayout>
    )
}

export default CardList;