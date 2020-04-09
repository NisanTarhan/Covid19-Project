import React from 'react';
import styled from 'styled-components';
import { Header, Routes, Footer } from './components'
import { GlobalProvider } from './context/GlobalState';
import { secondary } from './res/colors';

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 12fr 1fr;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: ${props => props.secondary.bg}
`

function App() {

  return (
    <GlobalProvider>
      <AppLayout secondary={secondary}>
        <Header />
        <Routes />
        <Footer />
      </AppLayout>
    </GlobalProvider>

  );
}


export default App;