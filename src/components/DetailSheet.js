import React from 'react';
import { string, number } from 'prop-types';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { primary, tertiary } from '../res/colors'

const DetailSheetLayout = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    position: relative;
    border-radius: 0.7rem;
    background-image: ${props => props.tertiary.bg};
    color: ${props => props.tertiary.text};
    box-shadow: 6px 9px 34px 0px rgba(0,0,0,0.75);
    text-align: center;
`

const Text = styled.p`   
    &:hover{
        color:#FFFF;
    }
`

const ImageLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    position: absolute;
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    background: ${props => props.tertiary.bg};
    color: #FFF;
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 1rem;
    padding-bottom: 0.4rem;
    font-size: 2rem;

    &:hover {
        transform: scale(1.05);
    }
`

const DetailSheet = ({ countryRegion, flagCode, confirmed, recovered, deaths }) => {
    DetailSheet.propTypes = {
        countryRegion: string,
        flagCode: string,
        confirmed: number,
        recovered: number,
        deaths: number,
    }

    DetailSheet.defaultProps = {
        countryRegion: "Unknown",
        confirmed: 0,
        recovered: 0,
        deaths: 0
    }

    let history = useHistory();
    return (
        <DetailSheetLayout primary={primary} tertiary={tertiary}>
            <Button tertiary={tertiary} onClick={() => history.goBack()}>&#8249;</Button>
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