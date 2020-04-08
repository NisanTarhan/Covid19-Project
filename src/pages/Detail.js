import React, { useContext } from 'react';
import styled from 'styled-components';
import { DetailSheet } from '../components'
import { GlobalContext } from '../context/GlobalState';

const DetailLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(auto, 550px) 1fr ;
    grid-template-rows: auto 700px auto;
    font-family: 'Bree Serif', serif;
    font-size: 1.5rem;
`

const Detail = ({ match }) => {
    const { id } = match.params;
    const { getDetailOfCountry } = useContext(GlobalContext);

    const detailData = getDetailOfCountry(id);
    const flagCode = detailData?.iso2.toLowerCase();

    return (
        <DetailLayout >
            <DetailSheet
                countryRegion={detailData?.countryRegion}
                flagCode={flagCode}
                confirmed={detailData?.confirmed}
                recovered={detailData?.recovered}
                deaths={detailData?.deaths}
            />
        </DetailLayout>
    )
}

export default Detail;