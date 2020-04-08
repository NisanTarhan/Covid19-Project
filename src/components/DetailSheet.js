import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const DetailSheetLayout = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    position: relative;
    border-radius: 0.7rem;
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.75);
    text-align: center;
`

const Text = styled.p`

`

const ImageLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(#434343 , #000000);
    color: #FFF;
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 1rem;
    padding-bottom: 7px;
    font-size: 2rem;

    &:hover {
        transform: scale(1.05);
    }
`

const DetailSheet = ({ countryRegion, flagCode, confirmed, recovered, deaths }) => {
    let history = useHistory();
    return (
        <DetailSheetLayout>
            <Button onClick={() => history.goBack()}>&#8249;</Button>
            {flagCode &&
                <ImageLayout>
                    <img
                        src={`https://www.countryflags.io/${flagCode}/flat/64.png`}
                        alt="flag" />
                </ImageLayout>
            }

            <Text>{countryRegion}</Text>
            <Text>Confirmed: {confirmed}</Text>
            <Text>Recovered: {recovered}</Text>
            <Text>Deaths: {deaths}</Text>
        </DetailSheetLayout>
    )
}

export default DetailSheet;