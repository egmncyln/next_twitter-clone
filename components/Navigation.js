import React from 'react';
import NavButton from './NavButton';
import TextTitle from './TextTitle';
import styles from './Navigation.module.css';
import { MENU } from '../constants';

function Navigation({ flat = false, selectedKey = 'home' }) {
    return (
        <nav className={styles.nav}>
            {
                MENU.map(menu => {
                    const showTitle = !flat && menu.title.length > 0;
                    const selected = selectedKey === menu.key;
                    return (
                        <NavButton
                            key={menu.key}
                            notify={menu.notify}
                            selected={selected}
                        >
                            { selected ? menu.iconSelected : menu.icon}
                            {showTitle && <TextTitle>{menu.title}</TextTitle>}
                        </NavButton>
                    )
                })
            }
        </nav >
    )
}

export default Navigation;
