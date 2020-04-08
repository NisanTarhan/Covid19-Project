import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
    margin: 0.5rem;
    /* background-image: linear-gradient(to right, #243949 0%, #517fa4 100%); */
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.75);
    text-align: center;
    color: #FFF;
    cursor: pointer;
    border: 1px solid #008CBA;
    border-radius: 0.7rem;
    /* backface-visibility: hidden; */
    /* transform: translateZ(0); */
    transition: transform 0.25s ease-out;
    font-family: 'Bree Serif', serif;
    &:hover {
        transform: scale(1.05);
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  
        /* background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%); */
    }
`

const CountryCard = ({ dataOfCountry }) => {
    const { countryRegion, deaths, iso2, id } = dataOfCountry;
    const countryCodeForFlag = iso2?.toLowerCase();
    return (
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <Card
            >
                {countryCodeForFlag && <img src={`https://www.countryflags.io/${countryCodeForFlag}/flat/64.png`} alt="flag" />}
                <p>{countryRegion}</p>
                <p>Deaths: {deaths}</p>
            </Card>
        </Link>
    )
}

export default CountryCard;