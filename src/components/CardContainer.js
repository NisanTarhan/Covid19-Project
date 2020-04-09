import React from 'react';
import { bool, array } from 'prop-types';
import styled from 'styled-components';
import { Card, Spinner } from '../components';

const CardListLayout = styled.div`
    width: 88vw;
    margin: 1.2rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(13rem, 1fr));
    grid-gap: 1.2rem;
`
const CardContainer = ({ filteredCountries, loading }) => {
    CardContainer.propTypes = {
        filteredCountries: array.isRequired,
        loading: bool
    }

    return (
        <CardListLayout>
            {loading ? <Spinner /> : filteredCountries?.map((country) =>
                <Card key={country.id} loading={loading} countryInfo={country} />)
            }
        </CardListLayout>
    )
}

export default CardContainer;