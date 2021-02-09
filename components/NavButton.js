import React from 'react';
import Button from './Button';
import styles from './NavButton.module.css';
import cn from 'classnames';

function NavButton({ href, notify, selected, children, className, ...props }) {
    return (
        <Button
            className={cn(
                styles.button,
                selected && styles.buttonSelected, className)}
            href={href}
            {...props}
        >
            {notify > 0 && <span className={styles.notify}>{notify}</span>}
            {children}
        </Button>
    )
}

export default NavButton;
