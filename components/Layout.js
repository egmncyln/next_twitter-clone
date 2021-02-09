import React from 'react';
import cn from 'classnames';
import styles from './Layout.module.css';
import useWindowSize from '../hooks/useWindowSize';

import CONST from '../constants/index';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Extra from '../components/Extra';

function Layout({ children }) {
    const size = useWindowSize();
    return (
        <div
            className={cn(styles.layout)}
        >
            <Sidebar flat={size.width < CONST.DESKTOP_SIZE} />
            <Main>{children}</Main>
            {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
        </div>
    )
}

export default Layout;
