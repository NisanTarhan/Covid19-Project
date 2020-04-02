import React from 'react';
import styled from 'styled-components';
import { CardList, SearchBar, Dropdown } from '../components';

const HomeLayout = styled.div`
    width: 100vw;
`

const Home = () => {
    return (
        <HomeLayout>
            <div style={styles.inputItemsContainer}>
                <SearchBar />
                <Dropdown />
            </div>
            <CardList />
        </HomeLayout>
    );
}

const styles = {
    inputItemsContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1.5rem"
    }
}

export default Home;