import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 0.5rem;
    background: ${props => props.numberOfDeaths > 500 ? "red" : "green"};
    text-align: center;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 0.7rem;
    /* backface-visibility: hidden; */
    /* transform: translateZ(0); */
    transition: transform 0.25s ease-out;
    font-family: 'Permanent Marker', cursive;
    &:hover {
        transform: scale(1.05);
        background: #00999E;
    }
`

const CountryCard = ({ dataOfCountry }) => {
    const { countryRegion, deaths, iso2 } = dataOfCountry;
    const countryCodeForFlag = iso2.toLowerCase();
    return (
        <Card numberOfDeaths={deaths}>
            <img src={`https://www.countryflags.io/${countryCodeForFlag}/flat/64.png`} alt="flag" />
            <p>{countryRegion}</p>
            <p>Deaths: {deaths}</p>
        </Card>
    )
}

export default CountryCard;