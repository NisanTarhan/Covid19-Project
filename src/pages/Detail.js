import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalState';

const DetailLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Permanent Marker', cursive;
    font-size: 1.5rem;
`

const DetailSheet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;    
    width: 25%;
    height: 80%;
    background-color: red;
    border-radius: 0.7rem;

    @media (max-width: 75rem){
        width: 95%;
        height: 20%;
        flex-direction: row;
    }

     @media (max-width: 47rem){
        height: 90%;
        flex-direction: column;
    }
`;

const Text = styled.p`
    flex :1;

     @media (max-width: 69rem){
        padding-left: 1rem;
        padding-right: 1rem;
    }

      @media (max-width: 47rem){
        padding-left: 0;
        padding-right: 0;
    }
`

const ImageLayout = styled.div`
    flex: 2;
    padding-top: 3rem;
    text-align: center;
    
    @media (max-width: 75rem){
            flex: 0;
            padding: 0px 1.9rem;
    }

     @media (max-width: 47rem){
            flex: 2;
            padding-top: 3rem;
    }
`

const Detail = ({ match }) => {
    const { id } = match.params;
    const { getDetailOfCountry } = useContext(GlobalContext);

    const data = getDetailOfCountry(id);
    const countryCodeForFlag = data?.iso2.toLowerCase();

    return (
        <DetailLayout >
            <DetailSheet>
                {countryCodeForFlag &&
                    <ImageLayout>
                        <img
                            src={`https://www.countryflags.io/${countryCodeForFlag}/flat/64.png`}
                            alt="flag" />
                    </ImageLayout>
                }

                <Text>{data?.countryRegion}</Text>
                <Text>confirmed: {data?.confirmed}</Text>
                <Text>recovered: {data?.recovered}</Text>
                <Text>deaths: {data?.deaths}</Text>
            </DetailSheet>
        </DetailLayout>
    )
}

export default Detail;