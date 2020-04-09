import React from 'react';
import styled from 'styled-components';
import { primary } from '../res/colors'
import { font } from '../res/fonts';

const HeaderLayout = styled.div`
  grid-column: 1/-1;
  background: ${props => props.primary.bg};
  color: ${props => props.primary.text};
  text-align: center;
  font-family: ${props => props.font.secondary};
`

const Header = () => {
    return (
        <HeaderLayout primary={primary} font={font}>
            <h1>COVID19 TEST INFORMATION</h1>
        </HeaderLayout>
    );
}


export default Header;