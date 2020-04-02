import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
  grid-column: 1/-1;
  font-family: 'Permanent Marker', cursive;
  background: orange;
  text-align: center;
`

const Footer = () => {
    return (
        <FooterLayout>
            <h2>Pankod Challenge</h2>
        </FooterLayout>
    );
}


export default Footer;