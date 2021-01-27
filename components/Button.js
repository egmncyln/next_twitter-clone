import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames'; // bizim style ile propstan gelen stylei merge etmek icin kullaniliyor.

function Button({ children, className, ...props }) {
    return (
        <button type="button" className={cn(styles.button, className)} {...props}>
            {children}
        </button>
    )
}

export default Button;
