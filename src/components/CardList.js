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
    const { countriesData } = useContext(GlobalContext);
    console.log(countriesData);
    return (
        <CardListLayout>
            {countriesData.map((country, index) =>
                <CountryCard key={index} dataOfCountry={country} />)
            }
        </CardListLayout>
    )
}

export default CardList;