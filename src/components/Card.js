import React from 'react';
import { number, string, shape } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primary, tertiary } from '../res/colors'
import { font } from '../res/fonts';

const CountryCard = styled.div`
    margin: 0.5rem;
    background-image: ${props => props.primary.bg};
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.75);
    text-align: center;
    color: ${props => props.primary.text};
    cursor: pointer;
    border: 1px solid #008CBA;
    border-radius: 0.7rem;
    transition: transform 0.25s ease-out;
    font-family: ${props => props.font.primary};
    &:hover {
        transform: scale(1.05);
        background-image: ${props => props.tertiary.hvr};
    }
`

const Card = ({ dataOfCountry }) => {
    Card.propTypes = {
        dataOfCountry: shape({
            id: number.isRequired,
            countryRegion: string.isRequired,
            recovered: number,
            deaths: number.isRequired,
            iso2: string
        })
    }

    Card.defaultProps = {
        countryRegion: "Unknown",
        deaths: 0
    }

    const { countryRegion, deaths, iso2, id } = dataOfCountry;
    const countryCodeForFlag = iso2?.toLowerCase();
    return (
        <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <CountryCard primary={primary} tertiary={tertiary} font={font}>
                {countryCodeForFlag && <img src={`https://www.countryflags.io/${countryCodeForFlag}/flat/64.png`} alt="flag" />}
                <p>{countryRegion}</p>
                <p>Deaths: {deaths}</p>
            </CountryCard>
        </Link>
    )
}

export default Card;