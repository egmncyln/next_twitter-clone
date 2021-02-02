import React from 'react';
import Layout from '../components/Layout';
import useWindowSize from '../hooks/useWindowSize';
import CONST from '../constants/index';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Extra from '../components/Extra';

function HomePage() {
    const size = useWindowSize();
    return (
        <Layout>
            <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>Sidebar</Sidebar>
            <Main>Main</Main>
            {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
        </Layout>
    )
}

export default HomePage;