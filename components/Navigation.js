import React from 'react';
import NavButton from './NavButton';
import TextTitle from './TextTitle';
import styles from './Navigation.module.css';
import { MENU } from '../constants';
import { useRouter } from 'next/router';
import cn from 'classnames';

function Navigation({ flat = false }) {
    const router = useRouter();
    return (
        <nav className={styles.nav}>
            {
                MENU.map(menu => {
                    const showTitle = !flat && menu.title.length > 0;
                    const selected = router.pathname === menu.path;
                    return (
                        <NavButton
                            key={menu.key}
                            notify={menu.notify}
                            selected={selected}
                            href={menu.path}
                            className={cn(styles.navButton, menu.key)}
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
