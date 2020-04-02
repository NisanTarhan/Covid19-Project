import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin: 0.5rem;
    background: #fe346e;
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

const CountryCard = () => {
    return (
        <Card>
            <img src="https://www.countryflags.io/be/flat/64.png" alt="flag" />
            <p>CountryName</p>
            <p>Deaths</p>
        </Card>
    )
}

export default CountryCard;