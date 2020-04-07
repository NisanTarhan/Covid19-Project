import React from 'react';
import styled from 'styled-components';

const FooterLayout = styled.div`
  grid-column: 1/-1;
  font-family: 'Permanent Marker', cursive;
  background: linear-gradient(#434343 , #000000);
  color: #F2D32D;
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