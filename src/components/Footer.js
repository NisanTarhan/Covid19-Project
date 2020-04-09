import React from 'react';
import styled from 'styled-components';
import { primary } from '../res/colors'
import { font } from '../res/fonts';

const FooterLayout = styled.div`
  grid-column: 1/-1;
  background: ${props => props.primary.bg};
  color: ${props => props.primary.text};
  text-align: center;
  font-family: ${props => props.font.secondary};
`

const Footer = () => {
    return (
        <FooterLayout primary={primary} font={font}>
            <h2>Pankod Challenge</h2>
        </FooterLayout>
    );
}


export default Footer;