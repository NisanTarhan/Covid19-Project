import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  grid-column: 1/-1;
  background: linear-gradient(#434343 , #000000);
  color: #F2D32D;
  text-align: center;
  font-family: 'Righteous', cursive;
`

const Header = () => {
    return (
        <HeaderLayout>
            <h1>COVID19 TEST INFORMATION</h1>
        </HeaderLayout>
    );
}


export default Header;