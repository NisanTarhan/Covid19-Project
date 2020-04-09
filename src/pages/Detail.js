import React, { useContext } from 'react';
import styled from 'styled-components';
import { DetailSheet } from '../components'
import { GlobalContext } from '../context/GlobalState';
import { secondary } from '../res/colors';
import { font } from '../res/fonts';

const DetailLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 550px) 1fr ;
    grid-template-rows: auto 700px auto;
    font-family: ${props => props.font.primary};
    font-size: 1.5rem;
    background: ${props => props.secondary.bg};
`

const Detail = ({ match }) => {
    const { id } = match.params;
    const { getDetailOfCountry } = useContext(GlobalContext);

    const detailData = getDetailOfCountry(id);
    const flagCode = detailData?.iso2.toLowerCase();

    return (
        <DetailLayout secondary={secondary} font={font}>
            <DetailSheet
                countryRegion={detailData?.countryRegion}
                flagCode={flagCode}
                confirmed={detailData?.confirmed}
                recovered={detailData?.recovered}
                deaths={detailData?.deaths}
                deathRate={detailData?.deathRate}
            />
        </DetailLayout>
    )
}

export default Detail;