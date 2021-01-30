import React from 'react';
import Button from './Button';
import styles from './NavButton.module.css';
import cn from 'classnames';

function NavButton({ notify, selected, children, ...props }) {
    return (
        <Button className={cn(styles.button, selected && styles.buttonSelected)} {...props}>
            {children}
            {notify && <span className={styles.notify}>{notify}</span>}
        </Button>
    )
}

export default NavButton;
