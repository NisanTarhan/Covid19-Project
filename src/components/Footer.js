import React from 'react';
import styled from 'styled-components';
import { primary, secondary } from '../res/colors'
import { font } from '../res/fonts';

const FooterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/-1;
  background: ${props => props.primary.bg};
  color: ${props => props.secondary.text};
  text-align: center;
  font-family: ${props => props.font.secondary};
  font-size: 0.9vw;

@media (max-width: 1600px) {
     font-size: 0.9rem;
}   
`

const Footer = () => {
    return (
        <FooterLayout primary={primary} secondary={secondary} font={font}>
            <h2>Pankod Challenge</h2>
        </FooterLayout>
    );
}


export default Footer;