import React from 'react';
import Button from './Button';
import styles from './NavButton.module.css';

function NavButton({ children }) {
    return (
        <Button className={styles.navButton}>{children}</Button>
    )
}

export default NavButton;
