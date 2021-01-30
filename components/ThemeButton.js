import React from 'react';
import Button from './Button';
import styles from './ThemeButton.module.css';
import cn from 'classnames';

function ThemeButton({ big = false, className, children, ...props }) {
    return (
        <Button className={cn(styles.button, big && styles.bigButton, className)} {...props}>
            {children}
        </Button>
    )
}

export default ThemeButton;
