import React from 'react';
import styled from 'styled-components';
import { Header, Main, Footer } from './components'
import { GlobalProvider } from './context/GlobalState';

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 12fr 1fr;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: black;
`

function App() {

  return (
    <GlobalProvider>
      <AppLayout>
        <Header />
        <Main />
        <Footer />
      </AppLayout>
    </GlobalProvider>

  );
}


export default App;