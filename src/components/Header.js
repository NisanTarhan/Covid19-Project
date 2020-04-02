import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.div`
  grid-column: 1/-1;
  background: orange;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
`

const Header = () => {
    return (
        <HeaderLayout>
            <h1>COVID19 TEST INFORMATION</h1>
        </HeaderLayout>
    );
}


export default Header;