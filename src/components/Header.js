import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../res/colors'
import { font } from '../res/fonts';

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  background: ${props => props.primary.bg};
  color: ${props => props.secondary.text};
  text-align: center;
  font-family: ${props => props.font.secondary};
  font-size: 1.2vw;

  @media (max-width: 1600px) {
     font-size: 1.2rem;
}   
`

const Header = () => {
    return (
        <HeaderLayout primary={primary} secondary={secondary} font={font}>
            <h1>COVID19 TEST INFORMATION</h1>
        </HeaderLayout>
    );
}


export default Header;